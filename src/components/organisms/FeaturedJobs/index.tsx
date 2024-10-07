import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";

interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
  return (
    <div className="mt-42 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[0, 1, 2].map((item: number) => (
          <JobItem
            key={item}
            image="/images/company.png"
            jobType="Full Time"
            type="Agency"
            name="Email Marketing"
            location="Paris, France"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam error quaerat, excepturi est enim adipisci eius consequatur pariatur eos? Aperiam debitis pariatur eius quod dolorum nisi placeat harum cum."
            categories={["Marketing", "Design"]}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
