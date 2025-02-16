// app/page.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/app/components/theme-toggle";

export default function Home() {
  const projects = [
    {
      title: "惠增云点餐",
      description: "SAAS点餐系统",
      tech: ["Spring Boot", "MySQL", "Redis", "RocketMQ"],
      role: "后端架构",
    },
    {
      title: "HBOS-医疗业务操作平台",
      description: "使用 Node.js 和 React 开发的高性能管理系统",
      tech: ["Node.js", "React", "MongoDB"],
      role: "后端架构",
    },
  ];

  const techStack = {
    languages: [
      { name: "Java", level: 95 },
      { name: "Python", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
    ],
    backend: [
      { name: "Spring Boot", level: 95 },
      { name: "Node.js", level: 85 },
      { name: "Dubbo", level: 80 },
    ],
    frontend: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Vue", level: 75 },
    ],
    database: [
      { name: "MySQL", level: 90 },
      { name: "Redis", level: 85 },
      { name: "MongoDB", level: 75 },
    ],
    devops: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "Jenkins", level: 70 },
    ],
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <NavigationMenu className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <Image src="/logo.jpg" alt="SoftSci" width={32} height={32} />
            <span className="text-xl font-semibold">SoftSci</span>
          </Link>
          <div className="hidden md:flex">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#skills"
                  className="font-medium hover:text-primary"
                >
                  技术栈
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#projects"
                  className="font-medium hover:text-primary"
                >
                  项目案例
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
          <ThemeToggle />
        </NavigationMenu>
      </header>
      <main className="px-16">
        <section className=" py-24 flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            全栈开发者
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              xxd
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-prose">
            专注于业务架构，8年开发经验，主导过10+大型项目
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a href="#contact">联系我</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" download>
                下载简历
              </a>
            </Button>
          </div>
        </section>
        <section id="skills" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">技术架构能力</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(techStack).map(([category, items]) => (
              <Card
                key={category}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg">
                    {
                      {
                        languages: "编程语言",
                        backend: "后端框架",
                        frontend: "前端框架",
                        database: "数据库",
                        devops: "DevOps",
                      }[category]
                    }
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {item.level}%
                        </span>
                      </div>
                      <Progress value={item.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">项目经验</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {project.role}
                    </span>
                    <Button variant="link" size="sm">
                      查看详情 →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t py-12 mt-24">
        <div className="flex flex-col items-center gap-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SoftSci. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/xuexingdong"
              className="hover:text-primary"
            >
              GitHub
            </a>
            <a href="mailto:xxd.nobug@gmail.com" className="hover:text-primary">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
