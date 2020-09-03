import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "../../styles/global.css"
import Header from "../../Components/Header"
import WorkExperience from "../../Components/WorkExperience"
import Skills from "../../Components/Skills"
import Education from "../../Components/Education"
import Awards from "../../Components/Awards"
import Languages from "../../Components/Languages"
import Interests from "../../Components/Interests"
import SUMMARY from "../../Components/Summary"
import PROFILE_DATA from '../../Data'
export default function Home() {
  return (
    <div className={`container ${PROFILE_DATA.THEME_TYPE}`}>
      <div className="curriculum-vitae-wrapper position-relative">
        <div className="curriculum-vitae-wrapper-inner mx-auto bg-white shadow-lg">
          <Header {...PROFILE_DATA.HEADER_DATA}/>
          <div className="curriculum-vitae-body p-5">
            <SUMMARY {...PROFILE_DATA.CAREER_SUMMARY} />
            <div className="row">
              <div className="col-lg-9">
                <WorkExperience {...PROFILE_DATA.WORKEXPERIENCE_DATA} />
              </div>
              <div className="col-lg-3">
                <Skills {...PROFILE_DATA.SKILLS_DATA} />
                <Education {...PROFILE_DATA.EDUCATION_DATA} />
                <Awards {...PROFILE_DATA.AWARDS_DATA} />
                <Languages {...PROFILE_DATA.LANGUAGES_DATA} />
                <Interests {...PROFILE_DATA.INTERESTS_DATA} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
