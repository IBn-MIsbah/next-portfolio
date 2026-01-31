/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Code2,
  Link as LinkIcon,
  Github,
  Image as ImageIcon,
  Type,
  Loader2,
  Wand2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

// Define the form schema with proper optional handling
const formSchema = z.object({
  title: z.string().min(2, "Title is required"),
  slug: z
    .string()
    .min(2, "Slug is required")
    .regex(
      /^[a-z0-9-]+$/,
      "Slugs can only contain lowercase letters, numbers, and hyphens",
    ),
  description: z.string().min(10, "Summary is too short"),
  content: z.string().optional().default(""),
  imageUrl: z.url("Must be a valid image URL"),
  githubUrl: z.url().optional().or(z.literal("")).default(""),
  liveUrl: z.url().optional().or(z.literal("")).default(""),
  techStack: z
    .string()
    .min(1, "Enter at least one technology (comma separated)"),
  published: z.boolean().default(false),
});

// Create a TypeScript type from the schema
type FormValues = z.infer<typeof formSchema>;

const CaseStudyAddForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Use the FormValues type with useForm
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      content: "",
      imageUrl: "",
      githubUrl: "",
      liveUrl: "",
      techStack: "",
      published: false,
    },
    mode: "onChange", // or "onBlur" depending on your preference
  });

  // Helper to generate slug from title
  const generateSlug = () => {
    const title = form.getValues("title");
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    form.setValue("slug", slug, { shouldValidate: true });
  };

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    try {
      // Transform techStack string into an array for Prisma
      const payload = {
        ...values,
        techStack: values.techStack
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        // Ensure optional fields are properly handled
        content: values.content || undefined,
        githubUrl: values.githubUrl || undefined,
        liveUrl: values.liveUrl || undefined,
      };

      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create project");
      }

      toast.success("Your case study is now live!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error ? error.message : "Failed to create project.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-4xl mx-auto p-6 border rounded-xl bg-card"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Title</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Type className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      className="pl-9"
                      placeholder="E-commerce Platform"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Slug with Auto-gen */}
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-between">
                  Slug
                  <button
                    type="button"
                    onClick={generateSlug}
                    className="text-xs text-primary flex items-center hover:underline"
                  >
                    <Wand2 className="h-3 w-3 mr-1" /> Auto-generate
                  </button>
                </FormLabel>
                <FormControl>
                  <Input placeholder="ecommerce-platform" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Image URL */}
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thumbnail Image URL</FormLabel>
              <FormControl>
                <div className="relative">
                  <ImageIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-9"
                    placeholder="https://..."
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tech Stack */}
        <FormField
          control={form.control}
          name="techStack"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tech Stack</FormLabel>
              <FormControl>
                <div className="relative">
                  <Code2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-9"
                    placeholder="Next.js, Tailwind, Prisma"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormDescription>
                Separate technologies with commas.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GitHub URL */}
          <FormField
            control={form.control}
            name="githubUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GitHub Repo (Optional)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Github className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      className="pl-9"
                      placeholder="https://github.com/..."
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Live URL */}
          <FormField
            control={form.control}
            name="liveUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Live Demo URL (Optional)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      className="pl-9"
                      placeholder="https://project.com"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Short Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Summary</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="A brief overview of the project..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Long Content / Case Study */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Case Study Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="The deep dive: Challenges, Solutions, and Results..."
                  className="min-h-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Published Toggle */}
        <FormField
          control={form.control}
          name="published"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Publish Project</FormLabel>
                <FormDescription>
                  Make this project visible on your public portfolio
                  immediately.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full h-12 text-lg"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            "Create Case Study"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CaseStudyAddForm;
