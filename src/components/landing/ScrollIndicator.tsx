function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div className="flex h-12 w-7 justify-center rounded-full border border-cyan-400">
        <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
      </div>
    </div>
  );
}

export default ScrollIndicator;