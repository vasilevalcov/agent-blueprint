const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("👀 Whispering in the background... Watching ROADMAP.md for tasks.");

const roadmapPath = path.join(__dirname, '../.agents/ROADMAP.md');
let isRunning = false;

function checkTasks() {
    if (isRunning) return;
    isRunning = true;
    process.stdout.write('.');

    try {
        if (!fs.existsSync(roadmapPath)) {
            isRunning = false;
            return;
        }

        const content = fs.readFileSync(roadmapPath, 'utf8');
        
        // Simple regex to find tasks marked as Queue for Builder
        // format: ### [x] Queue for Builder: Task Title
        const taskRegex = /### \[x\] Queue for Builder: (.*?)\n(.*?)(?=\n### |\n---|$)/gs;
        let match;

        const tasks = [];
        while ((match = taskRegex.exec(content)) !== null) {
            tasks.push({
                title: match[1].trim(),
                details: match[2].trim()
            });
        }

        if (tasks.length > 0) {
            console.log(`\n🤖 Found ${tasks.length} pending build task(s)`);
            
            for (const task of tasks) {
                console.log(`\n🚀 Executing Builder for: ${task.title}...`);
                
                try {
                    const builderPath = path.join(__dirname, 'headless_builder.js');
                    const taskDataB64 = Buffer.from(JSON.stringify(task)).toString('base64');
                    // In a real scenario, this would call headless_builder.js
                    // execSync(`node "${builderPath}" "${taskDataB64}"`, { stdio: 'inherit' });
                    console.log(`✅ Headless process simulated successfully for: ${task.title}.\n`);
                    
                    // Mark as complete in file (Simulated)
                    let newContent = fs.readFileSync(roadmapPath, 'utf8');
                    newContent = newContent.replace(`### [x] Queue for Builder: ${task.title}`, `### [✓] COMPLETED: ${task.title}`);
                    fs.writeFileSync(roadmapPath, newContent);

                } catch (err) {
                    console.error(`❌ Headless process failed:`, err.message);
                }
            }
        }
    } catch (err) {
        console.log(`\n❌ Error parsing roadmap: ${err.message}`);
    } finally {
        isRunning = false;
    }
}

// Initial run
checkTasks();
// Poll every 15 seconds
setInterval(checkTasks, 15000);
