
const skills = [
    { name: "Postman", file: "Postman.svg" },
    { name: "Ansible", file: "Ansible.svg" },
    { name: "PHP", file: "PHP.svg" },
    { name: "Laravel", file: "Laravel.svg" },
    { name: "Express", file: "Express.svg" },
    { name: "PostgreSQL", file: "PostgresSQL.svg" },
    { name: "NGINX", file: "NGINX.svg" },
    { name: "Terraform", file: "Terraform.svg" },
    { name: "Kubernetes", file: "Kubernetes.svg" },
    { name: "Docker", file: "Docker.svg" },
    { name: "Kafka", file: "Kafka.svg" },
    { name: "Linux", file: "Linux.svg" },
    { name: "Git", file: "Git.svg" },
    { name: "Cloud", file: "Cloud.svg" },
    { name: "Python", file: "Python.svg" },
    { name: "Node.js", file: "Node.js.svg" },
    { name: "TypeScript", file: "TypeScript.svg" },
    { name: "Next.js", file: "Next.js.svg" },
];

export default function SkillCard({ skill }: { skill: (typeof skills)[0] }) {
    return (
        <div className="group flex flex-col items-center gap-2">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/8 bg-white/4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.07] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(234,88,12,0.08)] sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                {/* Icon image */}
                <img
                    src={`/skills/${skill.file}`}
                    alt={skill.name}
                    className="h-8 w-8 object-contain transition-all duration-300 group-hover:scale-110 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                />
            </div>
            {/* Label */}
            <span className="text-xs font-medium text-white/40 transition-colors duration-300 group-hover:text-white/70 sm:text-sm">
                {skill.name}
            </span>
        </div>
    );
}