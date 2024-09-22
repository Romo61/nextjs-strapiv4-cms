"use client";

import { useForm } from "react-hook-form";
import { type EmailSchema, sendResendEmail } from "../actions";
import { renderButtonStyle } from "../utils/render-button-style";

export function SendEmailForm({
    placeholder,
    text,
}: {
    placeholder: string;
    text: string;
}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EmailSchema>();
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const onSubmit = (data: any) => console.log(data);
    console.log(errors);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12 max-w-5xl">
                    <div className="border-b border-gray-900/10 pb-12 w-full space-y-4">
                        <div>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    placeholder="Ihr Name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                    {...register("username", {})}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2">
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                    type="email"
                                    placeholder="name@example.com"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            {errors.email?.type === "required" && (
                                <div role="alert" className="mt-2 text-sm text-red-600">
                                    Not a valid email address.
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                    placeholder="0049 12345678"
                                    type="tel"
                                    {...register("phonenumber", { required: false })}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                    placeholder="Betreff"
                                    {...register("subject", { required: true, min: 1 })}
                                />
                            </div>
                            {errors.subject?.type === "required" && (
                                <div role="alert" className="mt-2 text-sm text-red-600">
                                    Not a valid subject.
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="mt-2">
                                <textarea
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                    {...register("message", { required: true })}
                                    rows={12}
                                />
                            </div>
                            {errors.message?.type === "required" && (
                                <div role="alert" className="mt-2 text-sm text-red-600">
                                    Not a valid message.
                                </div>
                            )}
                        </div>

                        <button
                            // disabled={pending}
                            type="submit"
                            className={renderButtonStyle("secondary")}
                        >
                            {text}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}