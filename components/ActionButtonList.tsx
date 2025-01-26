"use client";
import {
  useDisconnect,
  useAppKit,
  useAppKitNetwork,
  useAppKitAccount,
} from "@reown/appkit/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Wallet, Power, SwitchCamera, MoreVertical } from "lucide-react";
import { networks } from "@/config";

export const ActionButtonList = () => {
  const { disconnect } = useDisconnect();
  const { open } = useAppKit();
  const { switchNetwork } = useAppKitNetwork();
  const { address, isConnected } = useAppKitAccount();

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error("Failed to disconnect:", error);
    }
  };

  const handleSwitchNetwork = () => {
    try {
      switchNetwork(networks[1]);
    } catch (error) {
      console.error("Failed to switch network:", error);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {!isConnected ? (
        <Button
          variant="default"
          className="flex items-center gap-2"
          onClick={() => open()}
        >
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </Button>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="link">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleDisconnect}>
              <Power className="h-4 w-4 mr-2" />
              Disconnect
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSwitchNetwork}>
              <SwitchCamera className="h-4 w-4 mr-2" />
              Switch Network
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};
