import { ReactNode } from "react";

export default function ContainerCard({ children }: { children?: ReactNode }) {
  return (
    <div className=" p-4 sm:p-6 rounded-xl border border-tremor-border dark:border-dark-tremor-border">
      {children}
    </div>
  );
}
