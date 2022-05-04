import React, { useReducer, useEffect } from 'react';
import type { Creator } from '@prisma/client';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';

interface ICreatorContext {
  creator: Partial<Creator>;
  connectWallet: () => void;
  createPage: (username: string) => void;
}

export const creatorContext = React.createContext<ICreatorContext>({});

interface ICreatorContextProviderProps {
  readonly children: React.ReactNode;
}

enum CreatorActionType {
  CONNECT_WALLET = 'CONNECT_WALLET',
  SET_DATA = 'SET_DATA',
  UPDATE = 'UPDATE',
}

interface ICreatorAction {
  type: CreatorActionType;
  payload: Partial<Creator>;
}

interface ICreatorState {
  creator: Partial<Creator>;
}

const fetchCreator = async (address: string) => {
  const res = await fetch(`/api/creators/${address}`);
  const data = await res.json();
  return data;
};

const creatorReducer = (state: ICreatorState, action: ICreatorAction) => {
  const { type, payload } = action;

  switch (type) {
    case CreatorActionType.CONNECT_WALLET:
      return { ethAddress: payload.ethAddress, ...payload };
    case CreatorActionType.SET_DATA:
      return { ...state, ...payload };

      break;
    case CreatorActionType.UPDATE:
      break;
    default:
      break;
  }
};

export const CreatorContextProvider: React.FC<ICreatorContextProviderProps> = ({ children }) => {
  const [creator, dispatch] = useReducer(creatorReducer, { ethAddress: '', username: '' });
  const router = useRouter();

  useEffect(() => {
    const checkIfWalletConnected = async () => {
      try {
        if (!(window as any).ethereum) alert('Please install Metamask!');

        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });

        const address = accounts[0];

        if (address) {
          dispatch({
            type: CreatorActionType.CONNECT_WALLET,
            payload: { ethAddress: address },
          });

          const res = await fetch(`/api/creators/${address}`);
          const data = await res.json();

          dispatch({
            type: CreatorActionType.SET_DATA,
            payload: { ...data },
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkIfWalletConnected();
  }, []);

  const connectWallet = async () => {
    try {
      if (!(window as any).ethereum) return alert('Please install MetaMask!');

      const accounts = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
      });
      const address = accounts[0];

      const res = await fetch(`/api/creators/${address}`);
      const data = await res.json();
      console.log(data);

      dispatch({ type: CreatorActionType.CONNECT_WALLET, payload: { ethAddress: address } });
    } catch (error) {
      console.error(error);
    }
  };

  const createPage = async (username: string) => {
    console.log(creator);
    if (!creator.ethAddress) connectWallet();
    if (creator.username) router.push(`/creators/${creator.username}`);

    const data = { ethAddress: creator.ethAddress, username };
    console.log(data);
    try {
      const res = await fetch('/api/creator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      dispatch({ type: CreatorActionType.SET_DATA, payload: { username: json.username } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <creatorContext.Provider value={{ creator, connectWallet, createPage }}>
      {children}
    </creatorContext.Provider>
  );
};
