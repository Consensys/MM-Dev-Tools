import { useState } from "react";
import Button from "./Button";
import WalletIcon from "./icons/WalletIcon";
import { ConnectionModal } from "./ConnectionModal";
import { useAccount } from "wagmi";
import DisconnectIcon from "./icons/DisconnectIcon";
import { useDisconnect } from "wagmi";

export const ConnectButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const handleDisconnect = () => {
    disconnect();
    setOpen(false);
  };

  if (isConnected) {
    return (
      <Button
        className="mx-auto dark:bg-transparent shadow-none hover:shadow-none mb-2 lg:mb-0"
        onClick={handleDisconnect}
      >
        <DisconnectIcon /> Disconnect
      </Button>
    );
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="py-3 px-6 rounded-full gap-2 lg:mb-0 lg:mt-0 lg:mx-0 lg:gap-4 dark:bg-white dark:text-primary"
      >
        <WalletIcon /> Connect Wallet
      </Button>

      <ConnectionModal open={open} setOpen={setOpen} />
    </>
  );
};
