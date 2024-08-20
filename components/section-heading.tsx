import { TSectionHeading } from "@/lib/types";

type SectionHeadingProps = {
  children: TSectionHeading;
};

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="mb-8 text-center text-3xl font-medium capitalize">
      {children}
    </h2>
  );
};
