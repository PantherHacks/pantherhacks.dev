"use client";

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
