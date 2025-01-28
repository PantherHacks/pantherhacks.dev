"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const InterestForm = () => {
  const form = useForm({
    defaultValues: {
      "entry.1151823529": "",
    },
  });

  useEffect(() => {
    const emailInput = document.getElementById("interested-email") as HTMLInputElement;
    const submitButton = document.getElementById("interested-submit") as HTMLButtonElement;
    const emailForm = document.getElementById("interest-form") as HTMLFormElement;

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      const emailValue = emailInput.value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailPattern.test(emailValue)) {
        const formData = new FormData(emailForm);

        try {
          const response = await fetch(emailForm.action, {
            method: emailForm.method,
            body: formData,
          });

          if (!response.ok) {
            console.error("Form submission failed:", response.statusText);
            alert("Form submission failed. Please try again later.");
          } else {
            // Clear the input field
            emailInput.value = "";

            // Disable the input field and button
            emailInput.disabled = true;
            submitButton.disabled = true;

            // Change the placeholder text
            const originalPlaceholder = emailInput.placeholder;
            emailInput.placeholder = "Email has been submitted!";

            // Revert the placeholder text after 3 seconds
            setTimeout(() => {
              emailInput.placeholder = originalPlaceholder;
            }, 3000);

            // Re-enable the input field and button after 5 seconds
            setTimeout(() => {
              emailInput.disabled = false;
              submitButton.disabled = false;
            }, 5000);
          }
        } catch (error) {
          console.error("Form submission error:", error);
          alert("Form submission error. Please check your network connection and try again.");
        }
      } else {
        alert("Invalid email address. Please try again.");
      }
    };

    submitButton.addEventListener("click", handleSubmit);

    return () => {
      submitButton.removeEventListener("click", handleSubmit);
    };
  }, []);

  return (
    <Form {...form}>
      <form
        className="space-y-1"
        action="https://docs.google.com/forms/d/e/1FAIpQLScpo8Qdgw7JEfkUIkdF6MYeCDvTN6BazTramPzIo8lx66rP5A/formResponse"
        method="POST"
        id="interest-form"
      >
        <FormField
          control={form.control}
          name="entry.1151823529"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center">
              <FormLabel className="text-white text-center">
                Let us know you're interested by submitting your email!
              </FormLabel>
              <div className="sm:flex sm:flex-row w-full sm:space-x-1 space-y-1 sm:space-y-0">
                <FormControl>
                  <Input
                    aria-label="Email submission for interest in PantherHacks"
                    type="email"
                    id="interested-email"
                    placeholder="petethepanther@example.com"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <div className="sm:flex sm:flex-row">
                  <Button type="submit" id="interested-submit" variant="secondary" className="w-full">
                    Submit
                  </Button>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default InterestForm;
