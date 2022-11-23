import React from 'react';
// Styles
import { 
  StyledWraper,
  StyledContentNumber,
  StyledIconArrowLeft,
  StyledIconArrowRight
} from './styles';

interface PaginateProps {
  class_names: string;
  current_page: number;
  has_next?: boolean;
  next_page?: number;
  has_previous?: boolean;
  previous_page?: number;
  page_size?: number;
  // handlers
  handleGoFoward?: () => void;
  handleGoPrevious?: () => void;
}

const Paginate: React.FC<PaginateProps> = ({class_names, ...props}: PaginateProps) => {
  const {current_page} = props;
  // useCallback
  const handleBack = React.useCallback(() => {
    const {handleGoPrevious} = props;
    if (handleGoPrevious) handleGoPrevious();
  }, [props])

  const handleNext = React.useCallback(() => {
    const {handleGoFoward} = props;
    if (handleGoFoward) handleGoFoward();
  }, [props])
  return (
    <StyledWraper className={class_names}>
      <StyledIconArrowLeft onClick={handleBack} />
      <StyledContentNumber>
          {current_page}
      </StyledContentNumber>
      <StyledIconArrowRight onClick={handleNext} />
    </StyledWraper>
  )
}

export default Paginate;