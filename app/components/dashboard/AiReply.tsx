"use client";

import { Copy } from "lucide-react";

type Props = {
  reply: string;
  loading: boolean;
  onGenerate: () => void;
};

export default function AiReply({ reply, loading, onGenerate }: Props) {
  const handleCopy = async () => {
    if (!reply) return;

    await navigator.clipboard.writeText(reply);
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">AI Suggested Reply</h3>

        <button
          onClick={onGenerate}
          disabled={loading}
          className="rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      <div className="min-h-40 rounded-lg bg-slate-900 p-4">
        {reply ?
          <p className="whitespace-pre-wrap leading-7 text-slate-300">
            {reply}
          </p>
        : <p className="text-slate-500">Generate a professional AI reply.</p>}
      </div>

      {reply && (
        <button
          onClick={handleCopy}
          className="mt-4 flex items-center text-amber-50 gap-2 rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800">
          <Copy size={18} />
          Copy Reply
        </button>
      )}
    </div>
  );
}
