import { useSearchParams } from "react-router-dom";

export default function useQueryState() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQuery = (newParams, options = {}) => {
    const nextParams = new URLSearchParams();

    for (const [key, value] of searchParams.entries()) {
      nextParams.set(key, value);
    }

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        nextParams.delete(key);
      } else {
        nextParams.set(key, value);
      }
    });

    setSearchParams(nextParams, {
      replace: options.replace ?? false,
      preventScrollReset: true,
    });
  };

  return [searchParams, updateQuery];
}
