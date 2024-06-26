import { gql } from '@apollo/client';
import { Document } from '@contentful/rich-text-types';
import { apolloFetcher } from '../apollo/apollo-fetcher';

type THeroComponentCollection = {
    heroComponent: {
        headline: string;
        bodyText: {
            json: Document;
            links?: {
                entries?: {
                    block?: any;
                    inline?: any;
                } | null;
                assets?: {
                    block?: any;
                } | null;
            } | null;
        };
        ctaText: string;
        ctAtargetPage: {
            slug: string;
        };
        secondaryCtaText: string;
        secondaryCtaTargetPage: {
            slug: string;
        };
        backgroundImage: {
            title: string;
            url: string;
            width: number;
            height: number;
        };
    };
};

const GET_HERO_COMPONENT = gql`
    query ($id: String!, $locale: String!) {
        heroComponent(id: $id, locale: $locale) {
            headline
            bodyText {
                json
                links {
                    entries {
                        block {
                            sys {
                                id
                            }
                        }
                        inline {
                            sys {
                                id
                            }
                        }
                    }
                    assets {
                        block {
                            sys {
                                id
                            }
                            title
                            description
                            contentType
                            fileName
                            size
                            url
                            width
                            height
                        }
                    }
                }
            }
            ctaText
            ctAtargetPage {
                slug
            }
            secondaryCtaText
            secondaryCtaTargetPage {
                slug
            }
            backgroundImage {
                title
                url
                width
                height
            }
        }
    }
`;

export const getHeroComponent = async ({
    id,
    locale,
}: {
    id: string;
    locale: string;
}) => {
    return apolloFetcher<THeroComponentCollection>(GET_HERO_COMPONENT, {
        id,
        locale,
    });
};
