import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Bot,
  Cloud,
  Coins,
  CreditCard,
  Database,
  FileCheck,
  Landmark,
  Lock,
  Mail,
  MessageSquare,
  RefreshCw,
  Server,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { cx } from "@/lib/utils";

const iconRegistry = {
  smartphone: Smartphone,
  server: Server,
  database: Database,
  shieldCheck: ShieldCheck,
  refreshCw: RefreshCw,
  cloud: Cloud,
  users: Users,
  mail: Mail,
  messageSquare: MessageSquare,
  creditCard: CreditCard,
  landmark: Landmark,
  wallet: Wallet,
  fileCheck: FileCheck,
  coins: Coins,
  bot: Bot,
  lock: Lock,
  barChart: BarChart3,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof iconRegistry;

// icon is a plain string key (not a component) so FlowNode stays JSON-serializable
// across the server/client boundary — see content.ts Project["flow"].
export type FlowNode = {
  icon: IconKey;
  label: string;
  sublabel?: string;
  /** Small chip pinned to the card, e.g. "+ Bluetooth telemetry" */
  branchLabel?: string;
};

export function FlowDiagram({ steps }: { steps: FlowNode[] }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
      {steps.map((step, i) => (
        <div key={step.label} className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <FlowNodeCard node={step} />
          {i < steps.length - 1 && (
            <div className="flex items-center justify-center py-1 sm:px-2 sm:py-0">
              <ArrowDown size={18} className="shrink-0 text-ink/20 sm:hidden dark:text-paper/20" />
              <ArrowRight
                size={18}
                className="hidden shrink-0 text-ink/20 sm:block dark:text-paper/20"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function FlowNodeCard({ node }: { node: FlowNode }) {
  const Icon = iconRegistry[node.icon];
  return (
    <div
      className={cx(
        "relative flex-1 rounded-2xl border border-ink/10 bg-ink/[0.02] p-5 dark:border-paper/10 dark:bg-paper/[0.02]",
        node.branchLabel && "mt-3 sm:mt-4"
      )}
    >
      {node.branchLabel && (
        <span className="absolute -top-3 left-4 whitespace-nowrap rounded-full border border-acid/40 bg-paper px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-acid dark:bg-ink">
          + {node.branchLabel}
        </span>
      )}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-acid/10">
        <Icon size={20} className="text-acid" strokeWidth={1.75} />
      </div>
      <p className="mt-3 font-display text-lg text-ink dark:text-paper">{node.label}</p>
      {node.sublabel && (
        <p className="mt-1 text-xs leading-relaxed text-ink/50 dark:text-paper/50">
          {node.sublabel}
        </p>
      )}
    </div>
  );
}
