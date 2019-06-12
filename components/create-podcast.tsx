import React from "react";
import { Flex as FlexBase, Box, Text } from "rebass";
import { Formik, Field } from "formik";
// import yup from "yup";
import { minHeight } from "styled-system";
import styled from "styled-components";
import Layout from "./Layout";
import { Button } from "./Button/Button";
import { CreatePodcastComponent } from "../generated/apolloComponents";
// import { InputField } from "./fields/InputField";
import { TextAreaField } from "./fields/TextAreaField";

// exports to put somewhere else
const Flex = styled(FlexBase)`
  ${minHeight}
`;

export interface IGenericErrorObj {
  [key: string]: string;
}

// function PodcastWrap(graphFunc: any) {
//   return graphFunc({
//     variables: {
//       data: {
//         podcastUrls: [
//           "https://www.podbean.com/podcast-detail/d86zv-5db79/Open-Floor-SI%27s-NBA-Show-Podcast",
//           "https://www.podbean.com/podcast-detail/d4un8-57595/JavaScript-Jabber-Podcast"
//         ]
//       }
//     }
//   });
// }

export default class CreatePodcast extends React.PureComponent {
  constructor(props: any) {
    super(props);
    this.handleMakeClick = this.handleMakeClick.bind(this);
  }

  handleMakeClick(createPodcast: any) {
    createPodcast({
      variables: {
        data: {
          podcastUrls: [
            "https://www.podbean.com/podcast-detail/d86zv-5db79/Open-Floor-SI%27s-NBA-Show-Podcast",
            "https://www.podbean.com/podcast-detail/d4un8-57595/JavaScript-Jabber-Podcast"
          ]
        }
      }
    });
  }

  render() {
    return (
      <Layout>
        <Flex
          minHeight="50vh"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <CreatePodcastComponent
            variables={{
              data: {
                podcastUrls: [
                  "https://www.podbean.com/podcast-detail/d86zv-5db79/Open-Floor-SI%27s-NBA-Show-Podcast",
                  "https://www.podbean.com/podcast-detail/d4un8-57595/JavaScript-Jabber-Podcast"
                ]
              }
            }}
          >
            {async (createPodcast, { data, loading, error }) => (
              <Formik
                // validateOnBlur={false}
                // validateOnChange={false}
                onSubmit={async (data, { setErrors }) => {
                  try {
                    const response = await createPodcast({
                      variables: {
                        data: {
                          podcastUrls: []
                        }
                      }
                    });
                    console.log(response);
                    // Router.push("/"); // from copy
                  } catch (error) {
                    const displayErrors: IGenericErrorObj = {};

                    let myErrors =
                      error.graphQLErrors[0].extensions.exception
                        .validationErrors;

                    myErrors.forEach((validationError: any) => {
                      Object.values(validationError.constraints).forEach(
                        (message: any) => {
                          displayErrors[validationError.property] = message;
                        }
                      );
                    });
                    return setErrors(displayErrors);

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
                  podcastUrls: [
                    "https://www.podbean.com/podcast-detail/d86zv-5db79/Open-Floor-SI%27s-NBA-Show-Podcast",
                    "https://www.podbean.com/podcast-detail/d4un8-57595/JavaScript-Jabber-Podcast"
                  ]
                }}
              >
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Field
                      name="podcastUrls"
                      type="text"
                      placeholder="enter URL(s)"
                      component={TextAreaField} // {InputField}
                    />
                    <button type="submit">change password</button>

                    <Box>
                      {error ? `error: ${error.message}` : ""}
                      {loading ? "loading..." : ""}
                      <Text fontSize={[4]}>{JSON.stringify(data)}</Text>
                      <Button
                        onClick={() => console.log("honk")}
                        label="button label"
                        type="button"
                      >
                        Make a Podcast
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            )}
          </CreatePodcastComponent>
        </Flex>
      </Layout>
    );
  }
}
