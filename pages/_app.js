import { Layout } from 'antd';

import App, { Container } from 'next/app';

import React from 'react';

import withApollo from '../lib/withApollo';

import { ApolloProvider } from 'react-apollo';

import withNProgress from 'next-nprogress';

import NProgress from 'next-nprogress/component';

import convertDataURIToBinary from '../lib/base64';

const msDelay = 1000;

const { Footer } = Layout;

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker

        .register('/sw.js')

        .then(swReg => {
          console.log('SW Registered: ', swReg);

          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              swReg.pushManager

                .subscribe({
                  userVisibleOnly: true,

                  applicationServerKey: convertDataURIToBinary(
                    'BEV4IChUXRTC-Og6VYt0bgJQa1LKCWYaHC8byp5hRUdm91fePLJZKgKK3te5mWoJcTgUUwg3t-DvrGb--36-v6M'
                  )
                })

                .then(PushSubscriptionObject => {
                  console.log(PushSubscriptionObject);
                });
            }
          });
        })

        .catch(error => console.log("Can't register SW: ", error));
    }
  }

  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <NProgress
          color="#8e44ad"
          options={{ trickleSpeed: 50 }}
          showAfterMs={300}
          spinner={true}
        />

        <ApolloProvider client={apollo}>
          <Layout>
            <Component {...pageProps} />

            <Footer>
              충청남도 홍성군 홍북읍 | 이아롬 | 사업자번호: 302-43-345112
            </Footer>
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withNProgress(msDelay)(withApollo(MyApp));
