# Vercel Deployment Workflow

## Overview
This workflow describes the deterministic process for triggering, monitoring, and validating Vercel deployments.

## Automation Tools
The execution script for this workflow is located at `execution/vercel_ops.py`. It provides functions to:
1. Trigger a deployment.
2. Poll for deployment status.
3. Fetch build logs.

## Process
1. **Trigger:** The background builder (or an agent) pushes code to the `main` branch. Vercel automatically picks this up.
2. **Monitor:** If you need to manually monitor a deployment or ensure environment variables are synced, invoke the `vercel_ops.py` script.
3. **Verify:** Once the deployment status is `READY`, navigate to the deployment URL to visually verify the changes.
4. **Log Errors:** If a build fails, use the `vercel_ops.py` script to fetch the logs. Analyze the stack trace, fix the underlying code, and update `.agents/KNOWN_ISSUES.md`.
