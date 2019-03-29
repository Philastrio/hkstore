import { Layout } from 'antd';
import App, { Container } from 'next/app';
import React from 'react';
import withApollo from '../lib/withApollo';
import { ApolloProvider } from 'react-apollo';
const { Footer } = Layout;

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Container>
          <Layout>
            <Component {...pageProps} />
            <Footer>
              충청남도 홍성군 홍북읍 | 이아롬 | 사업자번호: 302-43-345112
            </Footer>
          </Layout>
        </Container>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
