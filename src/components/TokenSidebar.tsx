import { Token, TokenBar } from "./TokenBar";

type TokenSidebarProps = {
  tokens: Token[];
};

export const TokenSidebar = ({ tokens }: TokenSidebarProps) => (
  <div>
    {tokens.map((token) => (
      <TokenBar key={token.name} token={token} />
    ))}
  </div>
);
