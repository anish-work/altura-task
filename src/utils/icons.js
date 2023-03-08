import { EthereumSvg } from "../icons/eth-svg";
import { PolygonSvg } from "../icons/polygon-svg";

export const getChainIcon = (chain) => {
  switch(chain){
    case "ETHEREUM":
      return <EthereumSvg />;
    case "POLYGON":
      return <PolygonSvg />;
    default:
      return null;
  }
};
