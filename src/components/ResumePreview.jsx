import { EducationPreview, ExperiencePreview, PersonalDetailPreview, ProjectsPreview, SkillsPreview, SummaryPreview } from "@/components";
import { ResumeInfoContext } from "@/context/ResumeInfo.context"
import { useContext } from "react"

const ResumePreview = () => {
  const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
  return (
    <div className="shadow-lg h-full py-8 px-4 border-t-[20px] " style={{borderColor: resumeInfo?.themeColor}}>
      {/* Personal detail */}
      <PersonalDetailPreview resumeInfo={resumeInfo}/>
      {/* summary */}
      <SummaryPreview resumeInfo={resumeInfo}/>
      {/* professional experience */}
      <ExperiencePreview resumeInfo={resumeInfo}/>
      {/* education */}
      <EducationPreview resumeInfo={resumeInfo}/>
      {/* projects */}
      <ProjectsPreview resumeInfo={resumeInfo}/>
      {/* skills */}
      <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview