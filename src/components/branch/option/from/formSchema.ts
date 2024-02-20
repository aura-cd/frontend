import { z } from "zod";

export const generalSchema = z.object({
  pod_name: z.string().min(2).max(50),
});

export const resourceSchema = z.object({
  replicas: z.number().int().min(1).max(10),
  minCpu: z.number().int().min(1).max(10),
  maxCpu: z.number().int().min(1).max(10),
  minMemory: z.number().int().min(1).max(10),
  maxMemory: z.number().int().min(1).max(10),
  minReplicas: z.number().int().min(1).max(10),
  maxReplicas: z.number().int().min(1).max(10),
  targetPercentage: z.number().int().min(1).max(10),
});

export const environmentSchema = z.object({
  kye: z.string().min(2).max(50),
  value: z.string().min(2).max(50),
});

export const ServiceSchema = z.object({
  kye: z.string().min(2).max(50),
  value: z.string().min(2).max(50),
});
