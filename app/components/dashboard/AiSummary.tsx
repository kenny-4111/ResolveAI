"use client";

import { Sparkles } from "lucide-react";

type AiSummaryProps = {
  summary: string;
  summaryLoading: boolean;
  onGenerate: () => void;
};

export default function AiSummary({
  summary,
  summaryLoading,
  onGenerate,
}: AiSummaryProps) {
  return (
    <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="text-orange-500" size={20} />

          <h3 className="font-semibold text-orange-400">AI Summary</h3>
        </div>

        <button
          onClick={onGenerate}
          disabled={summaryLoading}
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50">
          {summaryLoading ? "Generating..." : "Generate"}
        </button>
      </div>

      <div className="min-h-24 rounded-lg bg-slate-950 p-4">
        {summary ?
          <p className="leading-7 text-slate-300">{summary}</p>
        : <p className="text-slate-500">
            Click Generate to let AI summarize this ticket.
          </p>
        }
      </div>
    </div>
  );
}
