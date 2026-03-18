import { useState } from "react";

const steps = [
    "Personal",
    "Preferences",
    "Professional",
    "Projects",
    "Education",
    "Additional"
];

type InputProps = {
    label: string;
    type?: string;
    value?: string;
    placeholder?: string;
    error?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;



const Input = ({
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    error,
    ...rest
}: InputProps) => (
    <div className="space-y-1">
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
            {label}
        </label>

        <input
            type={type}
            {...rest}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full border rounded-lg px-4 py-3 text-sm transition-all 
      focus:outline-none focus:ring-2 
      ${error ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-black/10"}`}
        />

        {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
);

const Textarea = ({
    label,
    value,
    onChange,
    error
}: {
    label: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
}) => (
    <div className="space-y-1">
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
            {label}
        </label>

        <textarea
            value={value}
            onChange={onChange}
            className={`w-full border px-4 py-3 text-sm h-28 rounded-lg
      ${error ? "border-red-400" : "border-gray-200"}`}
        />

        {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
);

const RadioGroup = ({
    label,
    options,
    value,
    onChange
}: {
    label: string;
    options: string[];
    value?: string;
    onChange?: (val: string) => void;
}) => (
    <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            {label}
        </p>

        <div className="flex gap-4 flex-wrap">
            {options.map((opt) => (
                <button
                    type="button"
                    key={opt}
                    onClick={() => onChange?.(opt)}
                    className={`px-4 py-2 rounded-full border text-sm transition-all
          ${value === opt
                            ? "bg-black text-white border-black"
                            : "border-gray-200 text-gray-600 hover:border-black"
                        }`}
                >
                    {opt}
                </button>
            ))}
        </div>
    </div>
);

export default function Careers() {
    const [step, setStep] = useState(0);

    const [form, setForm] = useState<any>({
        fullName: "",
        phone: "",
        city: "",

        workType: "",
        workMode: "",
        salary: "",
        timings: "",
        location: "",

        roles: "",
        skills: "",
        tasks: "",
        languages: "",

        projects: "",

        tenth: "",
        twelfth: "",
        ug: "",
        pg: "",

        vehicle: "",
        family: "",
        about: "",
        address: ""
    });

    const [errors, setErrors] = useState<any>({});

    const handleChange = (key: string, value: string) => {
        setForm((prev: any) => ({
            ...prev,
            [key]: value
        }));
    };

    const validateStep = () => {
        let e: any = {};

        if (step === 0) {
            if (!form.fullName) e.fullName = "Required";
            if (form.phone.length !== 10) e.phone = "Enter valid 10 digit phone";
            if (!form.city) e.city = "Required";
        }

        if (step === 1) {
            if (!form.workType) e.workType = "Required";
            if (!form.workMode) e.workMode = "Required";
            if (!form.salary) e.salary = "Required";
            if (!form.timings) e.timings = "Required";
            if (!form.location) e.location = "Required";
        }

        if (step === 2) {
            if (!form.roles) e.roles = "Required";
            if (!form.skills) e.skills = "Required";
            if (!form.tasks) e.tasks = "Required";
            if (!form.languages) e.languages = "Required";
        }

        if (step === 3) {
            if (!form.projects) e.projects = "Required";
        }

        if (step === 4) {
            if (!form.tenth) e.tenth = "Required";
            if (!form.twelfth) e.twelfth = "Required";
            // if (!form.ug) e.ug = "Required";
            // if (!form.pg) e.pg = "Required";
        }

        if (step === 5) {
            if (!form.vehicle) e.vehicle = "Required";
            if (!form.family) e.family = "Required";
            if (!form.about) e.about = "Required";
            if (!form.address) e.address = "Required";
        }

        setErrors(e);
        return Object.keys(e).length === 0;
    };

    // const next = () => setStep((prev) => prev + 1);
    const next = () => {
        const isValid = validateStep();
        if (isValid) {
            setStep((prev) => prev + 1);
        }
    };
    const prev = () => setStep((prev) => prev - 1);



    // 1. Add a submitting state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep()) return;

        setIsSubmitting(true);
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyFvP_1Adsk-LkK0qvNw1PRnbq6gS0qVWIhapnyGyXyIKIXdESbd-bB43WV3rVdWek/exec";

        try {
            const res = await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            console.log("res", res)

            // setIsSuccess(true);
            setIsSuccess(true);

            // Reset the form and go to Step 1 after 5 seconds
            setTimeout(() => {
                setIsSuccess(false);
                setStep(0);
                setForm({
                    fullName: "", phone: "", city: "", workType: "", workMode: "",
                    salary: "", timings: "", location: "", roles: "", skills: "",
                    tasks: "", languages: "", projects: "", tenth: "", twelfth: "",
                    ug: "", pg: "", vehicle: "", family: "", about: "", address: ""
                });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 5000);

            // Maybe redirect after 2 seconds
        } catch (err) {
            // alert("There was an error. Please try again.");
            setErrors({ submit: "Failed to submit. Please check your connection." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        // <div className="w-full min-h-screen bg-white px-6 md:px-12 py-20">
        <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 md:px-12 py-20">
            {/* <div className="max-w-3xl mx-auto"> */}
            <div className="max-w-3xl mx-auto bg-white border border-gray-100 shadow-xl rounded-2xl p-8">

                <h1 className="text-4xl font-bold mb-6">Careers</h1>

                {/* Step Indicator */}
                <p className="text-sm text-gray-400 mb-10">
                    Step {step + 1} of {steps.length} — {steps[step]}
                </p>

                <form className="space-y-8"  onSubmit={handleSubmit}>

                    {/* STEP 1 */}
                    {step === 0 && (
                        <>
                            <Input
                                label="Full Name"
                                value={form.fullName}
                                onChange={(e) => handleChange("fullName", e.target.value)}
                                error={errors.fullName}
                            />

                            <Input
                                label="Phone Number"
                                type="tel"
                                minLength={10}
                                maxLength={10}
                                value={form.phone}
                                onChange={(e) =>
                                    handleChange("phone", e.target.value.replace(/\D/g, ""))
                                }
                                error={errors.phone}
                            />

                            <Input
                                label="Current City of Residence"
                                value={form.city}
                                onChange={(e) => handleChange("city", e.target.value)}
                                error={errors.city}
                            />
                        </>
                    )}

                    {/* STEP 2 */}
                    {step === 1 && (
                        <>
                            <RadioGroup
                                label="Preferred Work Type"
                                options={["Full-Time", "Part-Time"]}
                                value={form.workType}
                                onChange={(val) => handleChange("workType", val)}
                            />
                            {errors.workType && <p className="text-xs text-red-500">{errors.workType}</p>}

                            <RadioGroup
                                label="Preferred Work Mode"
                                options={["Onsite", "Work From Home"]}
                                value={form.workMode}
                                onChange={(val) => handleChange("workMode", val)}
                            />
                            {errors.workMode && <p className="text-xs text-red-500">{errors.workMode}</p>}

                            <Input
                                label="Expected Monthly Salary (INR)"
                                value={form.salary}
                                onChange={(e) =>
                                    handleChange("salary", e.target.value.replace(/\D/g, ""))
                                }
                                error={errors.salary}
                            />

                            <Input
                                label="Preferred Work Timings"
                                value={form.timings}
                                onChange={(e) => handleChange("timings", e.target.value)}
                                error={errors.timings}
                            />

                            <Input
                                label="Preferred Work Locations"
                                value={form.location}
                                onChange={(e) => handleChange("location", e.target.value)}
                                error={errors.location}
                            />
                        </>
                    )}

                    {/* STEP 3 */}
                    {step === 2 && (
                        <>
                            <Textarea
                                label="Roles & Responsibilities (Explain in Detail)"
                                value={form.roles}
                                onChange={(e) => handleChange("roles", e.target.value)}
                                error={errors.roles}
                            />

                            <Textarea
                                label="Key Skills & Unique Strengths"
                                value={form.skills}
                                onChange={(e) => handleChange("skills", e.target.value)}
                                error={errors.skills}
                            />

                            <Textarea
                                label="Tasks You Can Perform"
                                value={form.tasks}
                                onChange={(e) => handleChange("tasks", e.target.value)}
                                error={errors.tasks}
                            />

                            <Input
                                label="Languages Known"
                                value={form.languages}
                                onChange={(e) => handleChange("languages", e.target.value)}
                                error={errors.languages}
                            />
                        </>
                    )}

                    {/* STEP 4 */}
                    {step === 3 && (
                        <Textarea
                            label="Projects You Have Worked On"
                            value={form.projects}
                            onChange={(e) => handleChange("projects", e.target.value)}
                            error={errors.projects}
                        />
                    )}

                    {/* STEP 5 */}
                    {step === 4 && (
                        <>
                            <Input
                                label="10th Marks / Percentage"
                                value={form.tenth}
                                onChange={(e) => handleChange("tenth", e.target.value)}
                                error={errors.tenth}
                            />

                            <Input
                                label="12th Marks / Percentage"
                                value={form.twelfth}
                                onChange={(e) => handleChange("twelfth", e.target.value)}
                                error={errors.twelfth}
                            />

                            <Input
                                label="UG Details & Marks"
                                value={form.ug}
                                onChange={(e) => handleChange("ug", e.target.value)}
                                error={errors.ug}
                            />

                            <Input
                                label="PG Details & Marks"
                                value={form.pg}
                                onChange={(e) => handleChange("pg", e.target.value)}
                                error={errors.pg}
                            />
                        </>
                    )}

                    {/* STEP 6 */}
                    {step === 5 && (
                        <>
                            <RadioGroup
                                label="Do you have a Driving License and Vehicle?"
                                options={["Yes, I have both", "No"]}
                                value={form.vehicle}
                                onChange={(val) => handleChange("vehicle", val)}
                            />
                            {errors.vehicle && <p className="text-xs text-red-500">{errors.vehicle}</p>}

                            <Textarea
                                label="Family Details (Parents & Siblings)"
                                value={form.family}
                                onChange={(e) => handleChange("family", e.target.value)}
                                error={errors.family}
                            />

                            <Textarea
                                label="About Yourself"
                                value={form.about}
                                onChange={(e) => handleChange("about", e.target.value)}
                                error={errors.about}
                            />

                            <Textarea
                                label="Residential Address"
                                value={form.address}
                                onChange={(e) => handleChange("address", e.target.value)}
                                error={errors.address}
                            />
                        </>
                    )}

                    <div className="space-y-6 transition-all duration-300">
                        <p className="text-sm text-gray-400 mb-10">
                            Step {step + 1} of {steps.length}
                        </p>

                        <div className="flex gap-2 mb-10">
                            {steps.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1 flex-1 rounded-full ${i <= step ? "bg-black" : "bg-gray-200"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between pt-10">
                        {step > 0 && (
                            <button type="button" onClick={prev} className="text-sm">
                                Back
                            </button>
                        )}

                        {step < steps.length - 1 ? (
                            <button
                                type="button"
                                onClick={next}
                                className="bg-black text-white px-6 py-2 text-sm"
                            >
                                Next
                            </button>
                        ) : (
                            // <button
                            //     type="submit"
                            //     className="bg-black text-white px-6 py-2 text-sm"
                            // >
                            //     Submit
                            // </button>

                            <button
                                type="submit"
                                // onClick={handleSubmit}
                                disabled={isSubmitting || isSuccess}
                                className={`px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${isSuccess
                                        ? "bg-green-600 text-white cursor-default"
                                        : "bg-[#e51c23] text-white hover:brightness-110 shadow-lg shadow-red-500/20 disabled:bg-gray-300"
                                    }`}
                            >
                                {isSubmitting ? "Processing..." : isSuccess ? "Success!" : "Submit Application"}
                            </button>
                        )}
                    </div>

                    {/* STATUS MESSAGES */}
                    <div className="mt-4">
                        {isSuccess && (
                            <div className="p-4 bg-green-50 border border-green-100 rounded-lg flex items-center gap-3 text-green-700 animate-fade-in">
                                <i className="fa-solid fa-circle-check"></i>
                                <p className="text-sm font-medium">Application submitted! Resetting form in 5 seconds...</p>
                            </div>
                        )}

                        {errors.submit && (
                            <div className="p-4 bg-red-50 border border-red-100 rounded-lg flex items-center gap-3 text-red-600">
                                <i className="fa-solid fa-circle-exclamation"></i>
                                <p className="text-sm font-medium">{errors.submit}</p>
                            </div>
                        )}
                    </div>

                </form>
            </div>
        </div>
    );
}