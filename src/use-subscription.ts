import { useEffect } from "react";
import { IStore } from "rex-store/typescript/interfaces";

export function useSubscription(
  store: IStore<any>,
  eventName: string,
  eventListener: (result: any) => void,
) {
  useEffect(() => {
    store.on(eventName, eventListener);
    return () => {
      store.off(eventName, eventListener);
    };
  }, []);
}
