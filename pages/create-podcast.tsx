import { Field, Formik } from "formik";
import React from "react";
import { Box, Flex as FlexBase, Image, Text } from "rebass";
import styled from "styled-components";
import { borders } from "styled-system";
import { NextContext } from "next";

const Flex = styled(FlexBase)`
  ${borders}
`;

import Layout from "../components/Layout";
import { CreatePodcastComponent } from "../generated/apolloComponents";

import { InputField } from "../components/fields/InputField";
import { TextAreaField } from "../components/fields/TextAreaField";

const CreatePodcast = ({ token }: { token: string }) => {
  return (
    <Layout title="Create Podcast">
      <CreatePodcastComponent>
        {(
          createPodcast,
          {
            data: dataCreatePodcast,
            error: errorCreatePodcast,
            loading: loadingCreatePodcast
          }
        ) => (
          <Formik
            // validateOnBlur={false}
            // validateOnChange={false}
            onSubmit={async (data, { setErrors }) => {
              try {
                console.log("Data I'm submitting", data);

                const response = await createPodcast({
                  variables: {
                    data: {
                      podcastUrls: [data.podcastUrls]
                    }
                  }
                });

                // const responser = await changePassword({
                //   variables: {
                //     data: {
                //       password: data.password,
                //       token: ""
                //     }
                //   }
                // });

                console.log(response);

                // Router.push("/");
              } catch (error) {
                // const displayErrors: { [key: string]: string } = {};
                console.error(error);

                // let myErrors =
                //   error.graphQLErrors[0].extensions.exception.validationErrors;

                // myErrors.forEach((validationError: any) => {
                //   Object.values(validationError.constraints).forEach(
                //     (message: any) => {
                //       displayErrors[validationError.property] = message;
                //     }
                //   );
                // });

                // return setErrors(displayErrors);
                return setErrors(error);

                // const errors: { [key: string]: string } = {};
                // err.graphQLErrors[0].validationErrors.forEach(
                //   (validationErr: any) => {
                //     Object.values(validationErr.constraints).forEach(
                //       (message: any) => {
                //         errors[validationErr.property] = message;
                //       }
                //     );
                //   }
                // );
                // setErrors(errors);
              }
            }}
            initialValues={{
              podcastUrls:
                "https://www.podbean.com/podcast-detail/d86zv-5db79/Open-Floor-SI%27s-NBA-Show-Podcast"
            }}
          >
            {({ handleSubmit }) => {
              const {
                feedLink = "",
                id = "",
                image = "",
                title = "",
                episodes = ""
              } = dataCreatePodcast ? dataCreatePodcast!.createPodcast[0] : {};
              return (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="podcastUrls"
                    type="podcastUrls"
                    placeholder="enter podcast url(s)"
                    component={InputField} // {InputField}
                  />
                  <button type="submit">submit urls</button>
                  {dataCreatePodcast ? (
                    <Flex flexDirection="column" width={[1, 1]}>
                      <Image width={"300px"} key={Math.random()} src={image} />
                      <Text key={Math.random()}>{id}</Text>
                      <Text key={Math.random()}>{title}</Text>
                      <Text key={Math.random()}>{feedLink}</Text>
                      {episodes ? (
                        episodes.map((podcastData: any, index: number) => (
                          <Flex flexDirection="column">
                            <Flex flexDirection="row">
                              <Text
                                fontWeight={600}
                                key={index + podcastData.id + Math.random()}
                              >
                                {index} {podcastData.date}
                              </Text>
                              <Text
                                fontWeight={600}
                                key={index + podcastData.title + Math.random()}
                              >
                                {podcastData.text}
                              </Text>
                            </Flex>
                          </Flex>
                        ))
                      ) : (
                        <Text>😭 No Episodes Yet 😭</Text>
                      )}
                    </Flex>
                  ) : (
                    ""
                  )}
                </form>
              );
            }}
          </Formik>
        )}
      </CreatePodcastComponent>
    </Layout>
  );
};

CreatePodcast.getInitialProps = ({
  query: { token }
}: NextContext<{ token: string }>) => {
  return {
    token
  };
};

export default CreatePodcast;
