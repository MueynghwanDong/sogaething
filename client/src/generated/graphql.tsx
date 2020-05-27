export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ICreateDetailDealInput = {
  postId: Scalars["Int"];
  userId: Scalars["Int"];
  hashtagId: Scalars["Int"];
};

export type ICreateFileInput = {
  productId: Scalars["Int"];
  imgPath: Scalars["String"];
};

export type ICreateHashtagInput = {
  productId: Scalars["Int"];
  hashtag: Scalars["String"];
};

export type ICreatePostInput = {
  uploaderId: Scalars["Int"];
  title: Scalars["String"];
  saleDate: Scalars["String"];
  contents: Scalars["String"];
  deal: Scalars["String"];
};

export type ICreateProductInput = {
  postId: Scalars["Int"];
  price: Scalars["Int"];
  name: Scalars["String"];
  category: Scalars["String"];
  state: Scalars["Boolean"];
};

export type IDetailDeal = {
  dealId: Scalars["ID"];
  post: IPost;
  user: IUser;
  hashtag: IHashtag;
  createdDate?: Maybe<Scalars["String"]>;
  modifiedDate?: Maybe<Scalars["String"]>;
};

export type IDetailDealOutput = {
  dealId: Scalars["ID"];
  postId: Scalars["Int"];
  imgPaths?: Maybe<Array<Maybe<IFileArr>>>;
  title: Scalars["String"];
  category: Scalars["String"];
  hashtag: Scalars["String"];
  contents: Scalars["String"];
  price: Scalars["Int"];
  buyerId: Scalars["Int"];
  sellerId: Scalars["Int"];
  address: Scalars["String"];
};

export type IFile = {
  fileId: Scalars["ID"];
  product: IProduct;
  imgPath: Scalars["String"];
};

export type IFileArr = {
  imgPath: Scalars["String"];
};

export type IFileOutput = {
  fileId: Scalars["Int"];
  productId: Scalars["Int"];
  imgPath: Scalars["String"];
};

export type IHashtag = {
  hashtagId: Scalars["ID"];
  product: IProduct;
  hashtag: Scalars["String"];
};

export type IHashtagOutput = {
  hashtagId: Scalars["ID"];
  productId: Scalars["Int"];
  hashtag: Scalars["String"];
};

export type IHistoryOutput = {
  userId?: Maybe<Scalars["Int"]>;
  postId?: Maybe<Scalars["Int"]>;
  createdDate?: Maybe<Scalars["String"]>;
  modifiedDate?: Maybe<Scalars["String"]>;
};

export type ILoginUserInput = {
  provider: Scalars["String"];
  token: Scalars["String"];
};

export type ILoginUserOutput = {
  token: Scalars["String"];
};

export type IMutation = {
  updateProduct?: Maybe<IProductOutput>;
  createProduct?: Maybe<IProductOutput>;
  deleteProduct: Scalars["Int"];
  createFile?: Maybe<IFileOutput>;
  updateFile?: Maybe<IFileOutput>;
  deleteFile: Scalars["Int"];
  createDetailDeal?: Maybe<IDetailDealOutput>;
  deleteDetailDeal: Scalars["Int"];
  loginUser?: Maybe<ILoginUserOutput>;
  updateUser?: Maybe<IUserOutput>;
  deleteUser?: Maybe<Scalars["Int"]>;
  createHashtag?: Maybe<IHashtagOutput>;
  updateHashtag?: Maybe<IHashtagOutput>;
  deleteHashtag?: Maybe<Scalars["Int"]>;
  createPost?: Maybe<IPostOutput>;
  updatePost?: Maybe<IPostOutput>;
  deletePost: Scalars["Int"];
  createHistory?: Maybe<IHistoryOutput>;
};

export type IMutationUpdateProductArgs = {
  input: IUpdateProductInput;
};

export type IMutationCreateProductArgs = {
  input: ICreateProductInput;
};

export type IMutationDeleteProductArgs = {
  id: Scalars["Int"];
};

export type IMutationCreateFileArgs = {
  input: ICreateFileInput;
};

export type IMutationUpdateFileArgs = {
  input: IUpdateFileInput;
};

export type IMutationDeleteFileArgs = {
  id: Scalars["Int"];
};

export type IMutationCreateDetailDealArgs = {
  input: ICreateDetailDealInput;
};

export type IMutationDeleteDetailDealArgs = {
  id: Scalars["Int"];
};

export type IMutationLoginUserArgs = {
  input: ILoginUserInput;
};

export type IMutationUpdateUserArgs = {
  input: IUpdateUserInput;
};

export type IMutationDeleteUserArgs = {
  id: Scalars["Int"];
};

export type IMutationCreateHashtagArgs = {
  input: ICreateHashtagInput;
};

export type IMutationUpdateHashtagArgs = {
  input: IUpdateHashtagInput;
};

export type IMutationDeleteHashtagArgs = {
  id: Scalars["Int"];
};

export type IMutationCreatePostArgs = {
  input: ICreatePostInput;
};

export type IMutationUpdatePostArgs = {
  input: IUpdatePostInput;
};

export type IMutationDeletePostArgs = {
  id: Scalars["Int"];
};

export type IMutationCreateHistoryArgs = {
  postId: Scalars["Int"];
};

export type IPost = {
  postId: Scalars["ID"];
  userId?: Maybe<Scalars["Int"]>;
  isBuy: Scalars["Boolean"];
  title: Scalars["String"];
  saleDate: Scalars["String"];
  contents: Scalars["String"];
  viewCount?: Maybe<Scalars["Int"]>;
  deal: Scalars["String"];
  createdDate?: Maybe<Scalars["String"]>;
  modifiedDate?: Maybe<Scalars["String"]>;
};

export type IPostOutput = {
  postId: Scalars["ID"];
  userId: Scalars["Int"];
  isBuy: Scalars["Boolean"];
  title: Scalars["String"];
  contents: Scalars["String"];
  viewCount: Scalars["Int"];
  deal: Scalars["String"];
};

export type IProduct = {
  productId: Scalars["ID"];
  post: IPost;
  name: Scalars["String"];
  price: Scalars["Int"];
  category: Scalars["String"];
  state?: Maybe<Scalars["Boolean"]>;
};

export type IProductOutput = {
  productId: Scalars["ID"];
  postId: Scalars["Int"];
  name: Scalars["String"];
  price: Scalars["Int"];
  category: Scalars["String"];
  state?: Maybe<Scalars["Boolean"]>;
};

export type IQuery = {
  findAllPosts?: Maybe<Array<Maybe<IPost>>>;
  findAllPost?: Maybe<Array<Maybe<IPostOutput>>>;
  findPostByPostId?: Maybe<IPostOutput>;
  /** findAllPostsByUploaderId(uploader_id: Int):[Post]
   * findPostByPostId(id: Int): Post
   */
  findRecentPosts?: Maybe<Array<Maybe<IPost>>>;
  findAllFile?: Maybe<Array<Maybe<IFileOutput>>>;
  findAllFiles?: Maybe<Array<Maybe<IFile>>>;
  findFileById?: Maybe<IFileOutput>;
  findAllDetailDeals?: Maybe<Array<Maybe<IDetailDeal>>>;
  findAllDetailDeal?: Maybe<Array<Maybe<IDetailDealOutput>>>;
  /** findDetailDealByPosts(postId: Int): [DetailDealOutput] */
  findDetailDealByPost?: Maybe<IDetailDealOutput>;
  findAllUsers?: Maybe<Array<Maybe<IUser>>>;
  findAllUser?: Maybe<Array<Maybe<IUserOutput>>>;
  findUserInfo?: Maybe<IUserInfoOutput>;
  findAllHashtags?: Maybe<Array<Maybe<IHashtag>>>;
  findAllHashtag?: Maybe<Array<Maybe<IHashtagOutput>>>;
  findByHashtagId?: Maybe<IHashtagOutput>;
  findAllProduct?: Maybe<Array<Maybe<IProductOutput>>>;
  findAllProducts?: Maybe<Array<Maybe<IProduct>>>;
  findByProductId?: Maybe<IProductOutput>;
  findUserHistoryByUserId?: Maybe<Array<Maybe<IPost>>>;
};

export type IQueryFindPostByPostIdArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type IQueryFindFileByIdArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type IQueryFindDetailDealByPostArgs = {
  postId?: Maybe<Scalars["Int"]>;
};

export type IQueryFindByHashtagIdArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type IQueryFindByProductIdArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type IUpdateFileInput = {
  fileId: Scalars["Int"];
  imgPath: Scalars["String"];
};

export type IUpdateHashtagInput = {
  hashtagId: Scalars["Int"];
  hashtag: Scalars["String"];
};

export type IUpdatePostInput = {
  postId: Scalars["Int"];
  title: Scalars["String"];
  contents: Scalars["String"];
  deal: Scalars["String"];
};

export type IUpdateProductInput = {
  productId: Scalars["ID"];
  postId: Scalars["Int"];
  price: Scalars["Int"];
  name: Scalars["String"];
  category: Scalars["String"];
  state: Scalars["Boolean"];
};

export type IUpdateUserInput = {
  userId: Scalars["ID"];
  imageUrl?: Maybe<Scalars["String"]>;
  phone: Scalars["String"];
  address: Scalars["String"];
  trust: Scalars["Int"];
};

export type IUser = {
  userId: Scalars["ID"];
  name: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  imageUrl: Scalars["String"];
  provider: Scalars["String"];
  providerId: Scalars["Int"];
  phone: Scalars["String"];
  address: Scalars["String"];
  trust: Scalars["Int"];
};

export type IUserInfoOutput = {
  name?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  trust?: Maybe<Scalars["Int"]>;
  numOfPosts?: Maybe<Scalars["Int"]>;
};

export type IUserOutput = {
  userId: Scalars["ID"];
  name: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  providerId: Scalars["Int"];
  phone: Scalars["String"];
  address: Scalars["String"];
  trust: Scalars["Int"];
};
export type IGetLoginMutationVariables = {
  input: ILoginUserInput;
};

export type IGetLoginMutation = { __typename?: "Mutation" } & {
  loginUser: Maybe<
    { __typename?: "LoginUserOutput" } & Pick<ILoginUserOutput, "token">
  >;
};

export type IGetPostQueryVariables = {
  postId?: Maybe<Scalars["Int"]>;
};

export type IGetPostQuery = { __typename?: "Query" } & {
  findDetailDealByPost: Maybe<
    { __typename?: "DetailDealOutput" } & Pick<
      IDetailDealOutput,
      | "dealId"
      | "postId"
      | "title"
      | "category"
      | "hashtag"
      | "contents"
      | "price"
      | "buyerId"
      | "sellerId"
      | "address"
    > & {
        imgPaths: Maybe<
          Array<Maybe<{ __typename?: "FileArr" } & Pick<IFileArr, "imgPath">>>
        >;
      }
  >;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const GetLoginDocument = gql`
  mutation getLogin($input: LoginUserInput!) {
    loginUser(input: $input) {
      token
    }
  }
`;
export type IGetLoginMutationFn = ReactApollo.MutationFn<
  IGetLoginMutation,
  IGetLoginMutationVariables
>;

export const GetLoginComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<IGetLoginMutation, IGetLoginMutationVariables>,
      "mutation"
    >,
    "variables"
  > & { variables?: IGetLoginMutationVariables }
) => (
  <ReactApollo.Mutation<IGetLoginMutation, IGetLoginMutationVariables>
    mutation={GetLoginDocument}
    {...props}
  />
);

export type IGetLoginProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<IGetLoginMutation, IGetLoginMutationVariables>
> &
  TChildProps;
export function withGetLogin<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    IGetLoginMutation,
    IGetLoginMutationVariables,
    IGetLoginProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    IGetLoginMutation,
    IGetLoginMutationVariables,
    IGetLoginProps<TChildProps>
  >(GetLoginDocument, {
    alias: "withGetLogin",
    ...operationOptions
  });
}

export function useGetLoginMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    IGetLoginMutation,
    IGetLoginMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    IGetLoginMutation,
    IGetLoginMutationVariables
  >(GetLoginDocument, baseOptions);
}
export const GetPostDocument = gql`
  query getPost($postId: Int) {
    findDetailDealByPost(postId: $postId) {
      dealId
      postId
      imgPaths {
        imgPath
      }
      title
      category
      hashtag
      contents
      price
      buyerId
      sellerId
      address
    }
  }
`;

export const GetPostComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<IGetPostQuery, IGetPostQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables?: IGetPostQueryVariables }
) => (
  <ReactApollo.Query<IGetPostQuery, IGetPostQueryVariables>
    query={GetPostDocument}
    {...props}
  />
);

export type IGetPostProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<IGetPostQuery, IGetPostQueryVariables>
> &
  TChildProps;
export function withGetPost<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    IGetPostQuery,
    IGetPostQueryVariables,
    IGetPostProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    IGetPostQuery,
    IGetPostQueryVariables,
    IGetPostProps<TChildProps>
  >(GetPostDocument, {
    alias: "withGetPost",
    ...operationOptions
  });
}

export function useGetPostQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<IGetPostQueryVariables>
) {
  return ReactApolloHooks.useQuery<IGetPostQuery, IGetPostQueryVariables>(
    GetPostDocument,
    baseOptions
  );
}
