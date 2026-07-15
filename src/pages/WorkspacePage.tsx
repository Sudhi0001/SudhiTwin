import Header from "../components/workspace/Header";
import Sidebar from "../components/workspace/Sidebar";
import ChatWindow from "../components/workspace/ChatWindow";
import ChatInput from "../components/workspace/ChatInput";
import AvatarPanel from "../components/workspace/AIControlCenter/AvatarPanel";
import InfoPanel from "../components/workspace/AIControlCenter/InfoPanel";
import InterviewController from "../components/interview/InterviewController";

import { useChat } from "../hooks/useChat";

function WorkspacePage() {
  const { messages, sendMessage, status } = useChat();

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#050816] text-white">

      {/* Global Controllers */}
      <InterviewController />

      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="grid flex-1 grid-cols-12 overflow-hidden">

        {/* Sidebar */}
        <aside className="col-span-2 overflow-hidden border-r border-white/10">
          <Sidebar />
        </aside>

        {/* Chat Area */}
        <main className="col-span-7 flex flex-col overflow-hidden">

          <div className="flex-1 overflow-hidden">
            <ChatWindow
              messages={messages}
              status={status}
              onPromptClick={sendMessage}
            />
          </div>

          <div className="border-t border-white/10">
            <ChatInput onSend={sendMessage} />
          </div>

        </main>

        {/* AI Control Center */}
        <aside className="col-span-3 flex flex-col overflow-hidden border-l border-white/10 bg-[#08101f]">

          {/* Avatar */}
          <div className="h-[330px] border-b border-white/10">
            <AvatarPanel />
          </div>

          {/* Dynamic Information */}
          <div className="flex-1 overflow-y-auto">
            <InfoPanel />
          </div>

        </aside>

      </div>

    </div>
  );
}

export default WorkspacePage;