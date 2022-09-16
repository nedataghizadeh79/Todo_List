import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AllServicesService {
    public constructor() {
        this.getAllListsInServer();
        this.getAllTasks();
    }

    public allTasks: any[] = [
        // {
        //     title: 'خرید صبحانه',
        //     description: 'باید به سوپری بروم و خوراکی بخرم',
        //     date: '1/2/3',
        //     done: true,
        //     id: 1,
        //     list: 1,
        // },
        // {
        //     title: 'بردن بچه ها به مدرسه',
        //     description: 'آنها را سوار سرویس مدرسه کنم ',
        //     date: '4/5/6',
        //     done: true,
        //     id: 2,
        //     list: 1,
        // },
        // {
        //     title: 'رفتن به سرکار',
        //     description: 'باید اسنپ بگیرم و تا میدان ونک بروم',
        //     date: '7/8/9',
        //     done: false,
        //     id: 3,
        //     list: 1,
        // },
    ];

    public allSubject: any[] = [
        // {title: 'کارهای روزانه', date: '1/2/33', isMain: true, id: 1},
        // {title: 'کارهای ظهر', date: '4/5/66', isMain: false, id: 2},
        // {title: 'کارهای شب', date: '7/8/99', isMain: false, id: 3},
    ];

    public deleteTask(id: string) {
        fetch(`http://localhost:3000/api/tasks/${id}`, {method: 'delete'}).then(
            () => (this.allTasks = this.allTasks.filter((t) => t._id !== id))
        );
    }

    public deleteLists(id: string) {
        fetch(`http://localhost:3000/api/tasks/${id}`, {method: 'delete'}).then(
            () => (this.allSubject = this.allSubject.filter((t) => t._id !== id))
        );
    }

    public editTask(id: string, obj: any) {
        let index = this.allTasks.findIndex((t) => t._id === id);
        let myTask = {...this.allTasks[index]};
        myTask.description = obj.newDescription;
        myTask.title = obj.newTitle;

        fetch(`http://localhost:3000/api/tasks/${id}`, {
            method: 'put',
            body: JSON.stringify(myTask),
            headers: {'content-type': 'application/json'},
        }).then(() => {
            let allMyTasks = [...this.allTasks];
            allMyTasks[index] = myTask;
            this.allTasks = allMyTasks;
        });
    }

    public doneTask(id: string) {
        let index = this.allTasks.findIndex((t) => t._id === id);
        let myTask = {...this.allTasks[index]};
        myTask.done = !myTask.done;

        fetch(`http://localhost:3000/ api/tasks/${id}`, {
            method: 'put',
            body: JSON.stringify(myTask),
            headers: {'content-type': 'application/json'},
        }).then(() => {
            let allMyTasks = [...this.allTasks];
            allMyTasks[index] = myTask;
            this.allTasks = allMyTasks;
        });
    }

    public getAllListsInServer() {
        fetch('http://localhost:3000/api/lists')
            .then((res) => res.json())
            .then((res) => (this.allSubject = res))
            .catch();
    }

    public getAllTasks() {
        fetch('http://localhost:3000/api/tasks')
            .then((res) => res.json())
            .then((res) => (this.allTasks = res));
    }

    public addnewList(title: string) {
        let newList = {
            title: title,
            date: Date.now(),
            isMain: false,
        };
        fetch('http://localhost:3000/api/lists', {
            method: 'post',
            body: JSON.stringify(newList),
            headers: {'content-type': 'application/json'},
        })
            .then((res) => res.json())
            .then((res) => (this.allSubject = [...this.allSubject, res]));
    }

    public createNewTask(obj: any, wantedId: string | null) {
        // console.log(this.allTasks);
        // console.log(obj);
        let varr = JSON.stringify({
            title: obj.title,
            description: obj.description,
            done: false,
            date: Date.now(),
            list: wantedId,
        });
        console.log(varr);
        fetch('http://localhost:3000/api/tasks', {
            method: 'post',
            body: varr,
            headers: {'content-type': 'application/json'},
        })
            .then((res) => res.json())
            .then((res) => (this.allTasks = [...this.allTasks, res]));
    }
}
