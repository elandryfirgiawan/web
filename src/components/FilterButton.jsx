import React from 'react';
import { Button } from '@/components/ui/button';

const FilterButton = ({ label, isActive, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant={isActive ? 'default' : 'outline'}
      className={`transition-all duration-200 ${
        isActive
          ? 'bg-primary text-primary-foreground hover:bg-primary/90 border-primary'
          : 'border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary'
      }`}
    >
      {label}
    </Button>
  );
};

export default FilterButton;