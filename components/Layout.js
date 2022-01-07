import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import { theme, useStyles } from "../utils/styles";

export default function Layout({
  children,
  commercePublicKey,
  title = "Coolshop",
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${title} - ZenyaCommerce`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.AppBar}
        >
          <Toolbar className={classes.toolbar}>
            <NextLink href="/">
              <Link
                variant="h6"
                color="inherit"
                noWrap
                href="/"
                className={classes.toolbarTitle}
              >
                ZenyaCommerce
              </Link>
            </NextLink>
            <nav>
              <NextLink href="/cart">
                <Link
                  variant="button"
                  color="textPrimary"
                  href="/cart"
                  className={classes.link}
                >
                  Cart
                </Link>
              </NextLink>
            </nav>
          </Toolbar>
        </AppBar>
        <Container component="main" className={classes.main}>
          {children}
        </Container>
        <Box>
          <Typography variant="body2" color="textSecondary" align="center">
            {"© "}
            ZenyaCommerce 2021
            {"."}
          </Typography>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}
