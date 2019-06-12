export type Maybe<T> = T | null;

export interface PodcastInput {
  podcastUrls: string[];
}

export interface ProductInput {
  name: string;
}

export interface RegisterInput {
  password: string;

  firstName: string;

  lastName: string;

  email: string;
}

export interface ChangePasswordInput {
  password: string;

  token: string;
}

export interface PasswordInput {
  password: string;
}

/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
export type DateTime = any;

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export type CreatePodcastVariables = {
  data: PodcastInput;
};

export type CreatePodcastMutation = {
  __typename?: "Mutation";

  createPodcast: CreatePodcastCreatePodcast[];
};

export type CreatePodcastCreatePodcast = {
  __typename?: "Podcast";

  id: string;

  name: Maybe<string>;

  image: string;

  title: Maybe<string>;

  feedLink: string;

  episodes: Maybe<CreatePodcastEpisodes[]>;
};

export type CreatePodcastEpisodes = {
  __typename?: "PodcastEpisode";

  id: Maybe<string>;

  url: string;

  text: string;

  date: DateTime;
};

export type GetAllPodcastsVariables = {};

export type GetAllPodcastsQuery = {
  __typename?: "Query";

  getAllPodcasts: GetAllPodcastsGetAllPodcasts;
};

export type GetAllPodcastsGetAllPodcasts = {
  __typename?: "Podcast";

  id: string;

  name: Maybe<string>;

  image: string;

  title: Maybe<string>;

  feedLink: string;

  episodes: Maybe<GetAllPodcastsEpisodes[]>;
};

export type GetAllPodcastsEpisodes = {
  __typename?: "PodcastEpisode";

  id: Maybe<string>;

  url: string;

  text: string;

  date: DateTime;
};

export type GetOnePodcastVariables = {
  name: string;
};

export type GetOnePodcastQuery = {
  __typename?: "Query";

  getOnePodcast: GetOnePodcastGetOnePodcast;
};

export type GetOnePodcastGetOnePodcast = {
  __typename?: "Podcast";

  id: string;

  name: Maybe<string>;

  image: string;

  title: Maybe<string>;

  feedLink: string;

  episodes: Maybe<GetOnePodcastEpisodes[]>;
};

export type GetOnePodcastEpisodes = {
  __typename?: "PodcastEpisode";

  id: Maybe<string>;

  url: string;

  text: string;

  date: DateTime;
};

export type ChangePasswordVariables = {
  data: ChangePasswordInput;
};

export type ChangePasswordMutation = {
  __typename?: "Mutation";

  changePassword: Maybe<ChangePasswordChangePassword>;
};

export type ChangePasswordChangePassword = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;
};

export type ConfirmUserVariables = {
  token: string;
};

export type ConfirmUserMutation = {
  __typename?: "Mutation";

  confirmUser: boolean;
};

export type ForgotPasswordVariables = {
  email: string;
};

export type ForgotPasswordMutation = {
  __typename?: "Mutation";

  forgotPassword: boolean;
};

export type LoginVariables = {
  email: string;
  password: string;
};

export type LoginMutation = {
  __typename?: "Mutation";

  login: Maybe<LoginLogin>;
};

export type LoginLogin = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;
};

export type LogoutVariables = {};

export type LogoutMutation = {
  __typename?: "Mutation";

  logout: boolean;
};

export type MeVariables = {};

export type MeQuery = {
  __typename?: "Query";

  me: Maybe<MeMe>;
};

export type MeMe = {
  __typename?: "User";

  firstName: string;

  lastName: string;

  email: string;

  name: string;

  id: string;
};

export type RegisterVariables = {
  data: RegisterInput;
};

export type RegisterMutation = {
  __typename?: "Mutation";

  register: RegisterRegister;
};

export type RegisterRegister = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;
};

export type HelloWorldVariables = {};

export type HelloWorldQuery = {
  __typename?: "Query";

  helloWorld: string;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const CreatePodcastDocument = gql`
  mutation CreatePodcast($data: PodcastInput!) {
    createPodcast(data: $data) {
      id
      name
      image
      title
      feedLink
      episodes {
        id
        url
        text
        date
      }
    }
  }
`;
export class CreatePodcastComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<CreatePodcastMutation, CreatePodcastVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<CreatePodcastMutation, CreatePodcastVariables>
        mutation={CreatePodcastDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreatePodcastProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreatePodcastMutation, CreatePodcastVariables>
> &
  TChildProps;
export type CreatePodcastMutationFn = ReactApollo.MutationFn<
  CreatePodcastMutation,
  CreatePodcastVariables
>;
export function CreatePodcastHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreatePodcastMutation,
        CreatePodcastVariables,
        CreatePodcastProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreatePodcastMutation,
    CreatePodcastVariables,
    CreatePodcastProps<TChildProps>
  >(CreatePodcastDocument, operationOptions);
}
export const GetAllPodcastsDocument = gql`
  query GetAllPodcasts {
    getAllPodcasts {
      id
      name
      image
      title
      feedLink
      episodes {
        id
        url
        text
        date
      }
    }
  }
`;
export class GetAllPodcastsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetAllPodcastsQuery, GetAllPodcastsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetAllPodcastsQuery, GetAllPodcastsVariables>
        query={GetAllPodcastsDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetAllPodcastsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetAllPodcastsQuery, GetAllPodcastsVariables>
> &
  TChildProps;
export function GetAllPodcastsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetAllPodcastsQuery,
        GetAllPodcastsVariables,
        GetAllPodcastsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetAllPodcastsQuery,
    GetAllPodcastsVariables,
    GetAllPodcastsProps<TChildProps>
  >(GetAllPodcastsDocument, operationOptions);
}
export const GetOnePodcastDocument = gql`
  query GetOnePodcast($name: String!) {
    getOnePodcast(name: $name) {
      id
      name
      image
      title
      feedLink
      episodes {
        id
        url
        text
        date
      }
    }
  }
`;
export class GetOnePodcastComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetOnePodcastQuery, GetOnePodcastVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetOnePodcastQuery, GetOnePodcastVariables>
        query={GetOnePodcastDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetOnePodcastProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetOnePodcastQuery, GetOnePodcastVariables>
> &
  TChildProps;
export function GetOnePodcastHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetOnePodcastQuery,
        GetOnePodcastVariables,
        GetOnePodcastProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetOnePodcastQuery,
    GetOnePodcastVariables,
    GetOnePodcastProps<TChildProps>
  >(GetOnePodcastDocument, operationOptions);
}
export const ChangePasswordDocument = gql`
  mutation ChangePassword($data: ChangePasswordInput!) {
    changePassword(data: $data) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;
export class ChangePasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ChangePasswordMutation, ChangePasswordVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ChangePasswordMutation, ChangePasswordVariables>
        mutation={ChangePasswordDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ChangePasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ChangePasswordMutation, ChangePasswordVariables>
> &
  TChildProps;
export type ChangePasswordMutationFn = ReactApollo.MutationFn<
  ChangePasswordMutation,
  ChangePasswordVariables
>;
export function ChangePasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ChangePasswordMutation,
        ChangePasswordVariables,
        ChangePasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ChangePasswordMutation,
    ChangePasswordVariables,
    ChangePasswordProps<TChildProps>
  >(ChangePasswordDocument, operationOptions);
}
export const ConfirmUserDocument = gql`
  mutation ConfirmUser($token: String!) {
    confirmUser(token: $token)
  }
`;
export class ConfirmUserComponent extends React.Component<
  Partial<ReactApollo.MutationProps<ConfirmUserMutation, ConfirmUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<ConfirmUserMutation, ConfirmUserVariables>
        mutation={ConfirmUserDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ConfirmUserProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ConfirmUserMutation, ConfirmUserVariables>
> &
  TChildProps;
export type ConfirmUserMutationFn = ReactApollo.MutationFn<
  ConfirmUserMutation,
  ConfirmUserVariables
>;
export function ConfirmUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ConfirmUserMutation,
        ConfirmUserVariables,
        ConfirmUserProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ConfirmUserMutation,
    ConfirmUserVariables,
    ConfirmUserProps<TChildProps>
  >(ConfirmUserDocument, operationOptions);
}
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
export class ForgotPasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ForgotPasswordMutation, ForgotPasswordVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ForgotPasswordMutation, ForgotPasswordVariables>
        mutation={ForgotPasswordDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ForgotPasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ForgotPasswordMutation, ForgotPasswordVariables>
> &
  TChildProps;
export type ForgotPasswordMutationFn = ReactApollo.MutationFn<
  ForgotPasswordMutation,
  ForgotPasswordVariables
>;
export function ForgotPasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ForgotPasswordMutation,
        ForgotPasswordVariables,
        ForgotPasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ForgotPasswordMutation,
    ForgotPasswordVariables,
    ForgotPasswordProps<TChildProps>
  >(ForgotPasswordDocument, operationOptions);
}
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;
export class LoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LoginMutation, LoginVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LoginMutation, LoginVariables>
        mutation={LoginDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type LoginProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginVariables>
> &
  TChildProps;
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginVariables
>;
export function LoginHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LoginMutation,
        LoginVariables,
        LoginProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LoginMutation,
    LoginVariables,
    LoginProps<TChildProps>
  >(LoginDocument, operationOptions);
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export class LogoutComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LogoutMutation, LogoutVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LogoutMutation, LogoutVariables>
        mutation={LogoutDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type LogoutProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LogoutMutation, LogoutVariables>
> &
  TChildProps;
export type LogoutMutationFn = ReactApollo.MutationFn<
  LogoutMutation,
  LogoutVariables
>;
export function LogoutHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LogoutMutation,
        LogoutVariables,
        LogoutProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LogoutMutation,
    LogoutVariables,
    LogoutProps<TChildProps>
  >(LogoutDocument, operationOptions);
}
export const MeDocument = gql`
  query Me {
    me {
      firstName
      lastName
      email
      name
      id
    }
  }
`;
export class MeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQuery, MeVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<MeQuery, MeVariables>
        query={MeDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type MeProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<MeQuery, MeVariables>
> &
  TChildProps;
export function MeHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        MeQuery,
        MeVariables,
        MeProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    MeQuery,
    MeVariables,
    MeProps<TChildProps>
  >(MeDocument, operationOptions);
}
export const RegisterDocument = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;
export class RegisterComponent extends React.Component<
  Partial<ReactApollo.MutationProps<RegisterMutation, RegisterVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<RegisterMutation, RegisterVariables>
        mutation={RegisterDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type RegisterProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<RegisterMutation, RegisterVariables>
> &
  TChildProps;
export type RegisterMutationFn = ReactApollo.MutationFn<
  RegisterMutation,
  RegisterVariables
>;
export function RegisterHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RegisterMutation,
        RegisterVariables,
        RegisterProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    RegisterMutation,
    RegisterVariables,
    RegisterProps<TChildProps>
  >(RegisterDocument, operationOptions);
}
export const HelloWorldDocument = gql`
  query HelloWorld {
    helloWorld
  }
`;
export class HelloWorldComponent extends React.Component<
  Partial<ReactApollo.QueryProps<HelloWorldQuery, HelloWorldVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<HelloWorldQuery, HelloWorldVariables>
        query={HelloWorldDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type HelloWorldProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<HelloWorldQuery, HelloWorldVariables>
> &
  TChildProps;
export function HelloWorldHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        HelloWorldQuery,
        HelloWorldVariables,
        HelloWorldProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    HelloWorldQuery,
    HelloWorldVariables,
    HelloWorldProps<TChildProps>
  >(HelloWorldDocument, operationOptions);
}
