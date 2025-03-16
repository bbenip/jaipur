import { TokenBar } from "./TokenBar";

type TokenSidebarProps = {
  tokenRows: { name: string; values: number[] }[];
};

export const TokenSidebar = ({ tokenRows }: TokenSidebarProps) => (
  <div>
    {tokenRows.map((tokenRow) => (
      <TokenBar key={tokenRow.name} tokenRow={tokenRow} />
    ))}
  </div>
);
