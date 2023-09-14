import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

// layouts
import Root from "./layouts/Root";
import Help from "./layouts/Help";
import CareersLayout from "./layouts/CareersLayout";

// pages
import Faq from "./pages/help/faq";
import Contact, { contactForm } from "./pages/help/contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, {
    careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareerError from "./pages/careers/CareerError";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
                path="careers"
                element={<CareersLayout />}
                errorElement={<CareerError />}
            >
                <Route index element={<Careers />} loader={careersLoader} />
                <Route
                    path=":id"
                    element={<CareerDetails />}
                    loader={careerDetailsLoader}
                />
            </Route>
            <Route path="help" element={<Help />}>
                <Route path="faq" element={<Faq />} />
                <Route
                    path="contact"
                    element={<Contact />}
                    action={contactForm}
                />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
