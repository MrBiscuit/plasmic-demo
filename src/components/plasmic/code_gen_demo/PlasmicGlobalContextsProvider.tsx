// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hM9GRXxMGXhTkxrnS16qDc

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { ContentfulCredentialsProvider } from "@plasmicpkgs/plasmic-contentful"; // plasmic-import: lXSCSEWn2xb/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  contentfulCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof ContentfulCredentialsProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, contentfulCredentialsProviderProps } = props;

  return (
    <ContentfulCredentialsProvider
      {...contentfulCredentialsProviderProps}
      accessToken={
        contentfulCredentialsProviderProps &&
        "accessToken" in contentfulCredentialsProviderProps
          ? contentfulCredentialsProviderProps.accessToken!
          : ("KxEqmvLL9LvXO9ibUMyQuJ63af7Vn23D7RuHVX9_k_E" as const)
      }
      environment={
        contentfulCredentialsProviderProps &&
        "environment" in contentfulCredentialsProviderProps
          ? contentfulCredentialsProviderProps.environment!
          : ("master" as const)
      }
      space={
        contentfulCredentialsProviderProps &&
        "space" in contentfulCredentialsProviderProps
          ? contentfulCredentialsProviderProps.space!
          : ("rmysp64lpee3" as const)
      }
    >
      {children}
    </ContentfulCredentialsProvider>
  );
}
