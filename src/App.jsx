import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
const Layout = lazy(() => import("./components/Layout"));
const ProjectSection = lazy(() => import("./content/ProjectSection"));
const Contact = lazy(() => import("./content/Contact"));
const SkillSection = lazy(() => import("./content/SkillSection"));
const Notfound = lazy(() => import("./content/Notfound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-[50vh]">
            <ThreeDots height="80" width="80" radius="9" color="#06b6d4" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<ProjectSection />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/project" element={<ProjectSection />}></Route>
          <Route exact path="/skill" element={<SkillSection />}></Route>
          <Route exact path="/*" element={<Notfound />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
