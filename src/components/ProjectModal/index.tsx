import { FC, useEffect, useCallback } from "react";
import Badge from "../Badge";
import { XMarkIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        url: string;
        technologies: string[];
        image: string;
        screenshots?: string[];
        deployUrl?: string;
        testCredentials?: { username: string; password: string };
    } | null;
}

const ProjectModal: FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen || !project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative bg-gray-900 border border-gray-700/50 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
                >
                    <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Content */}
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-white pr-8">
                        {project.title}
                    </h2>

                    <p className="mt-4 text-sm text-slate-400 leading-7">
                        {project.description}
                    </p>

                    {/* Test Credentials */}
                    {project.testCredentials && (
                        <div className="mt-4 p-3 bg-cyan-900/30 border border-cyan-700/40 rounded-lg">
                            <p className="text-xs font-medium text-cyan-300 mb-1.5">
                                🔑 Test Login Credentials
                            </p>
                            <div className="flex gap-6 text-sm">
                                <span className="text-slate-300">
                                    Username:{" "}
                                    <code className="text-cyan-200 bg-gray-800 px-1.5 py-0.5 rounded">
                                        {project.testCredentials.username}
                                    </code>
                                </span>
                                <span className="text-slate-300">
                                    Password:{" "}
                                    <code className="text-cyan-200 bg-gray-800 px-1.5 py-0.5 rounded">
                                        {project.testCredentials.password}
                                    </code>
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Screenshots */}
                    {project.screenshots && project.screenshots.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-sm font-medium text-cyan-200 mb-3">
                                Screenshots
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {project.screenshots.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        className="w-full rounded-lg border border-gray-700/50 object-cover"
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap mt-5">
                        {project.technologies.map((tech, index) => (
                            <Badge key={index} text={tech} />
                        ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 mt-6">
                        {project.url && project.url !== "#" && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gray-800 text-white hover:bg-gray-700 border border-gray-600/50 transition-colors"
                            >
                                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                View on GitHub
                            </a>
                        )}
                        {project.deployUrl && project.deployUrl !== "#" && (
                            <a
                                href={project.deployUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 transition-colors"
                            >
                                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                Visit Project
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
