import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { theme } from "@mystaken/themes";
import { AppMDXProvider, NavigationBar } from "@mystaken/src/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kevin Gao</title>
        <meta name="description" content="Kevin Gao's personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <AppMDXProvider>
          <VStack minH={"100vh"} height={"100vh"} spacing={0}>
            <NavigationBar />
            <Component {...pageProps} />
          </VStack>
        </AppMDXProvider>
      </ChakraProvider>
    </>
  );
}
