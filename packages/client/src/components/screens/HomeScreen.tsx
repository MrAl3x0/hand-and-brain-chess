import { useState } from "react";
import type { FormEvent } from "react";
import logo from "@/assets/logo.svg";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !roomCode.trim()) {
      setError("Both fields are required");
      return;
    }
    setError("");
    console.log(`Player: ${name}, Room: ${roomCode}`);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <form
        onSubmit={submit}
        className="mx-4 w-full max-w-sm rounded-xl bg-white/80 p-10 backdrop-blur ring-1 ring-black/5 shadow-2xl dark:bg-gray-800/70 dark:ring-white/10 sm:p-12"
      >
        <img
          src={logo}
          alt="Hand & Brain Logo"
          className="mx-auto mb-8 h-24 w-24"
        />

        <div className="space-y-6">
          <input
            id="player-name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={20}
            className="w-full rounded-md border border-gray-300 bg-white/80 px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-gray-700 dark:bg-gray-700/80 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-sky-400"
            aria-required
          />

          <input
            id="room-code"
            type="text"
            placeholder="Enter a room code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
            maxLength={4}
            className="w-full rounded-md border border-gray-300 bg-white/80 px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-gray-700 dark:bg-gray-700/80 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-sky-400"
            aria-required
          />

          {error && <p className="text-center text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-md bg-sky-500 py-3 font-semibold text-white transition-colors hover:bg-sky-600 active:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-700"
          >
            Play
          </button>
        </div>

        <button
          type="button"
          onClick={() => setShowRules(true)}
          className="mt-8 block w-full text-center text-xs text-sky-500 hover:underline"
        >
          How to play
        </button>

        <p className="mt-6 text-center text-xs text-black/50 dark:text-white/40">
          Built&nbsp;with&nbsp;❤️&nbsp;by&nbsp;Alex
        </p>
      </form>

      {/* Rules Modal */}
      {showRules && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Hand &amp; Brain – Rules
            </h2>
            <ol className="mb-6 list-decimal space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>Play in teams of two: one Hand, one Brain.</li>
              <li>On each turn the Brain names a piece type (e.g. Knight).</li>
              <li>The Hand must move one piece of that type—no hints.</li>
              <li>No talking about squares; standard chess rules apply.</li>
              <li>Alternate turns like regular chess; touch-move stands.</li>
              <li>First team to give checkmate wins.</li>
            </ol>
            <button
              type="button"
              onClick={() => setShowRules(false)}
              className="w-full rounded-md bg-sky-500 py-2 text-white hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
