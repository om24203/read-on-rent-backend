import { createContext, useContext, useState } from "react";

const RentalBagContext = createContext(null);

const DURATION_PRICE_FIELD = {
  7: "rentalPrice7Days",
  14: "rentalPrice14Days",
  30: "rentalPrice30Days",
};

export function RentalBagProvider({ children }) {
  const [bag, setBag] = useState([]); // [{ book, duration }]

  const getPriceForDuration = (book, duration) => {
    const field = DURATION_PRICE_FIELD[duration] || DURATION_PRICE_FIELD[7];
    return book?.[field] ?? 0;
  };

  const addToBag = (book, duration = 7) => {
    setBag((prev) => {
      const exists = prev.find((i) => i.book._id === book._id);
      if (exists) {
        return prev.map((i) =>
          i.book._id === book._id ? { ...i, duration } : i
        );
      }
      return [...prev, { book, duration }];
    });
  };

  const removeFromBag = (bookId) =>
    setBag((prev) => prev.filter((i) => i.book._id !== bookId));

  const updateDuration = (bookId, duration) =>
    setBag((prev) =>
      prev.map((i) => (i.book._id === bookId ? { ...i, duration } : i))
    );

  const clearBag = () => setBag([]);

  const isInBag = (bookId) => bag.some((i) => i.book._id === bookId);

  const getBagSummary = () => {
    const rentalFee = bag.reduce(
      (sum, i) => sum + getPriceForDuration(i.book, i.duration),
      0
    );
    const securityDeposit = bag.reduce(
      (sum, i) => sum + (i.book.securityDeposit || 0),
      0
    );
    const deliveryFee = bag.length > 0 ? 49 : 0;
    const total = rentalFee + securityDeposit + deliveryFee;

    return { rentalFee, securityDeposit, deliveryFee, total };
  };

  return (
    <RentalBagContext.Provider
      value={{
        bag,
        addToBag,
        removeFromBag,
        updateDuration,
        clearBag,
        isInBag,
        getPriceForDuration,
        getBagSummary,
      }}
    >
      {children}
    </RentalBagContext.Provider>
  );
}

export const useRentalBag = () => useContext(RentalBagContext);