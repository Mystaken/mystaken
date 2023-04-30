import { ContentContainer } from "@mystaken/src/common";
import IndexExchange from "@mystaken/src/mdx/pages/experiences/index-exchange.mdx";
import UniversityOfToronto from "@mystaken/src/mdx/pages/experiences/university-of-toronto.mdx";
import Ventmere from "@mystaken/src/mdx/pages/experiences/ventmere.mdx";
import Walmart from "@mystaken/src/mdx/pages/experiences/walmart.mdx";
import MarketCast from "@mystaken/src/mdx/pages/experiences/marketcast.mdx";

export const ExperiencesContent = () => {
  return (
    <ContentContainer>
      <MarketCast />
      <Walmart />
      <Ventmere />
      <UniversityOfToronto />
      <IndexExchange />
    </ContentContainer>
  );
};
