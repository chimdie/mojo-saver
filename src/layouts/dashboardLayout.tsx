import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, useBreakpointValue, Text } from "@chakra-ui/react";
import { BottomNaviagtion, SideBar } from "../components/Nav";
import { getLogedInUser, logout } from "pages/auth/slices/authSlice";
import { useAppSelector, useAppDispatch } from "redux/hook";
import { userData } from "utils";
import { ProtectedRoute } from "routes";
import { userLinks, adminLinks } from "components/Nav/links";

export const smVariant = { navigation: "mobileNav", navigationButton: true };
export const mdVariant = { navigation: "sidebar", navigationButton: false };

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAppSelector((state: any) => state.account);

  const currentUser = userData() && userData().user ? userData().user : user;

  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  useEffect(() => {
    if (!currentUser) {
      dispatch(getLogedInUser());
    }
  }, []);

  useEffect(() => {
    if (!currentUser) {
      navigate("/", { replace: true });
    }
  }, [user, location]);

  if (!currentUser) {
    navigate("/", { replace: true });
    return <></>;
  }

  function handleLogout() {
    dispatch(logout());
    window.location.href = `${window.location.protocol}//${window.location.host}/`;
    navigate("/", { replace: true });
  }

  return (
    <>
      <ProtectedRoute />
      <Box as="main" height="100%" width="100%">
        {variants?.navigation === "mobileNav" ? (
          <>
            <Box
              as="section"
              display="flex"
              flexDirection="column"
              height="100%"
              width="100%"
            >
              <Box
                as="main"
                flex="1"
                display="flex"
                // alignItems="center"
                // justifyContent="center"
                flexDirection="column"
                padding={8}
                mb="4rem"
              >
                {children}
              </Box>
            </Box>
            <BottomNaviagtion
              currentUser={
                currentUser?.isAdmin === true ? adminLinks : userLinks
              }
            />
          </>
        ) : (
          <Box as="section">
            <SideBar
              onClick={handleLogout}
              currentUser={
                currentUser?.isAdmin === true ? adminLinks : userLinks
              }
            />
            <Box
              as="section"
              pl={300}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
              minHeight="100vh"
            >
              <Box as="section">
                <Box as="main" p="14">
                  {children}
                </Box>
              </Box>
              <Box as="footer" textAlign="center" py={5} justifySelf="self-ed">
                <Text fontSize="12px">
                  Copyright Solo Thrift ©{" "}
                  <span>{new Date().getFullYear()}</span>.
                </Text>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
