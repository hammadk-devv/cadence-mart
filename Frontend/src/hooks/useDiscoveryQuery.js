import { useEffect, useMemo, useRef } from "react";
import useQueryState from "./useQueryState";
import { parseQuery } from "../utils/queryParser";
import { serializeQuery } from "../utils/querySerializer";
import { areStatesEqual } from "../utils/discoveryStateMapper";

export default function useDiscoveryQuery() {
  const [searchParams, updateQuery] = useQueryState();

  const discoveryState = useMemo(() => parseQuery(searchParams), [searchParams]);

  const lastSearchRef = useRef(discoveryState.search);

  useEffect(() => {
    lastSearchRef.current = discoveryState.search;
  }, [discoveryState.search]);

  const setDiscoveryState = (updater) => {
    const nextState = typeof updater === "function" ? updater(discoveryState) : updater;

    if (areStatesEqual(discoveryState, nextState)) return;

    if (nextState.view) {
      try {
        localStorage.setItem("cadence_shop_view", nextState.view);
      } catch (e) {
        console.error(e);
      }
    }

    const nextParams = serializeQuery(nextState);

    const isTypingSearch =
      nextState.search !== lastSearchRef.current &&
      areStatesEqual({ ...discoveryState, search: nextState.search }, nextState);

    updateQuery(nextParams, { replace: isTypingSearch });
  };

  return [discoveryState, setDiscoveryState];
}
