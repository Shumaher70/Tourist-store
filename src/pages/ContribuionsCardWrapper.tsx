interface ContribuionsCardWrapperProps {
  children?: React.ReactNode;
}

const ContribuionsCardWrapper = ({
  children,
}: ContribuionsCardWrapperProps) => {
  return (
    <div className="py-10 flex flex-wrap gap-5 pt-[5%] justify-between">
      {children}
    </div>
  );
};

export default ContribuionsCardWrapper;
