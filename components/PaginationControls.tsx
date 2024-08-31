import React from "react";
import { View, Button } from "react-native";

interface PaginationControlsProps {
  onPrevPage: () => void;
  onNextPage: () => void;
  currentPage: number;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  onPrevPage,
  onNextPage,
  currentPage,
}) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <Button title="Previous" onPress={onPrevPage} disabled={currentPage <= 1} />
    <Button title="Next" onPress={onNextPage} />
  </View>
);

export default PaginationControls;
