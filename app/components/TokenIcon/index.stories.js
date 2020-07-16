import React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import TokenIcon from './index'

export default {
  title: 'Components/TokenIcon',
  decorators: [withKnobs]
};

// export const empty = () => <TokenIcon />
export const eth = () => <TokenIcon tokenSymbol={"eth"} />
export const krg = () => <TokenIcon tokenSymbol={"krg"} />
export const size = () => {
  return (
    <div>
      18px <TokenIcon tokenSymbol={"eth"} size={18}/>
      24px <TokenIcon tokenSymbol={"eth"} size={24}/>
      36px <TokenIcon tokenSymbol={"eth"} size={36}/>
    </div>
  )
}

// Knobs for React props
export const withDynamic = () => {
  const tokenSymbol = text("token symbol", 'eth')
  const size = number("size", 24)
  return <div>{size}px <TokenIcon tokenSymbol={tokenSymbol} size={size}/></div>;
}
